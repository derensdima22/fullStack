import { FormWrapper, InputCheckboxField, InputTextField, PasswordField } from '@core/components';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { AuthRegistrationFormProps, AuthRegistrationFormValues } from '@modules/auth/types';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box } from '@mui/material';
import classNames from 'classnames';
import { isUndefined, omitBy } from 'lodash';
import { ReactElement, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

export const AuthRegistrationForm = (props: AuthRegistrationFormProps): ReactElement => {
  const {
    status,
    incompleteForm,
    className,
    onChange,
    onSubmit,
  } = props;

  const schema = yup.object({
    firstName: yup
      .string()
      .min(2, 'Username must be at least 2 characters')
      .required('First name is required field'),
    password: yup
      .string()
      .min(3, 'Password must be at least 3 characters')
      .required('Password is required field'),
    confirmPassword: yup
    .string()
    .required('Please retype your password.')
    .oneOf([yup.ref('password')], 'Your passwords do not match.'),
    email: yup
      .string()
      .email('Email must be a valid email')
      .required('Email is required field'),
    terms: yup
      .boolean()
      .oneOf([true], 'You must accept the terms and conditions')
      .required(),
  });

  const methods = useForm<AuthRegistrationFormValues>({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      email: '',
      firstName: '',
      password: '',
      confirmPassword: '',
      rememberMe: false,
      terms: false,
    },
  });

  useEffect(() => {
    methods.reset(
      omitBy(incompleteForm, isUndefined),
      {
        keepDirtyValues: true,
        keepDefaultValues: true,
      },
    );
  }, []);

  const submitRecipe: SubmitHandler<AuthRegistrationFormValues> = async (data) => {
    onSubmit && onSubmit({
      firstName: data.firstName,
      email: data.email,
      password: data.password,
      rememberMe: data.rememberMe,
    });
  };

  const changeForm = () => {
    const data = methods.getValues();

    onChange && onChange({
      firstName: data.firstName,
      email: data.email,
      rememberMe: data.rememberMe,
      terms: data.terms,
    });
  };

  return (
    <FormWrapper
      methods={methods}
      className={classNames(
        'flex flex-col gap-4 mt-8',
        className,
      )}
      formProps={{
        onSubmit: methods.handleSubmit(submitRecipe),
        onChange: changeForm,
      }}
    >
      <Box className="flex justify-between mr-7">
        <InputTextField
          inputMode="text"
          name="firstName"
          label="First name"
          variant="outlined"
          />

        <InputTextField
          inputMode="email"
          name="email"
          label="Email"
          variant="outlined"
        />
      </Box>

      <PasswordField
        name="password"
        label="Password"
      />

      <PasswordField
        name="confirmPassword"
        label="Confirm Password"
      />

      <InputCheckboxField
        name="rememberMe"
        label="Remember me"
      />

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
        Registration
      </LoadingButton>
    </FormWrapper>
  );
};
