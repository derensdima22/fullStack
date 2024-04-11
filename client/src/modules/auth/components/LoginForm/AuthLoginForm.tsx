import { FormWrapper, InputCheckboxField, InputTextField, PasswordField } from '@core/components';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { AuthLoginFormProps, AuthLoginFormValues } from '@modules/auth/types';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Typography } from '@mui/material';
import classNames from 'classnames';
import { ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink, useLocation } from 'react-router-dom';
import * as yup from 'yup';

export const AuthLoginForm = (props: AuthLoginFormProps): ReactElement => {
  const {
    status,
    className,
    onSubmit,
  } = props;

  const { state } = useLocation();

  const schema = yup.object({
    email: yup
      .string()
      .email('Email must be a valid email')
      .required('Email is required field'),
    password: yup
      .string()
      .required('Password is required field'),
    // rememberMe: yup
    //   .boolean()
    //   .optional(),
  });

  const methods = useForm<AuthLoginFormValues>({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      email: state?.query.email ?? process.env.REACT_APP_DEFAULT_EMAIL ?? '',
      password: process.env.REACT_APP_DEFAULT_PASSWORD ?? '',
      rememberMe: true,
    },
  });

  const submitRecipe: SubmitHandler<AuthLoginFormValues> = async (data) => {
    onSubmit && onSubmit({
      email: data.email.trim(),
      password: data.password.trim(),
      rememberMe: data.rememberMe,
    });
  };

  return (
    <FormWrapper
      methods={methods}
      formProps={{
        onSubmit: methods.handleSubmit(submitRecipe),
      }}
      className={classNames(
        'flex flex-col gap-4 mt-8',
        className,
      )}
    >
      <InputTextField
        inputMode="email"
        name="email"
        label="Email"
        variant="outlined"
        sx={{ borderRadius: '15px' }}
      />

      <PasswordField
        name="password"
        label="Password"
        sx={{ borderRadius: '15px' }}
      />

      <Typography className="text-blue-600 text-sm flex justify-end">
        <NavLink
          className="hover:underline text-brand font-medium"
          to="/auth/restore"
        >
          Forgot password?
        </NavLink>
      </Typography>

      <Box className="inline-flex items-center justify-between w-full mt-1.5">
        <InputCheckboxField
          name="rememberMe"
          label="Keep me logged in"
        />
      </Box>

      <LoadingButton
        type="submit"
        className={classNames(
          'w-[200px] h-[50px] rounded-2xl',
          'bg-gradient-to-l from-[#024AB5] from-10% via-[#316EC9] via-50% to-[#70A9FF] to-90%'
        )}
        size="medium"
        variant="contained"
        loading={status === 'loading'}
      >
        Login
      </LoadingButton>
    </FormWrapper>
  );
};
