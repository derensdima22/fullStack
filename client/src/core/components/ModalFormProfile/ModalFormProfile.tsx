import { Box } from '@mui/material';
import { FormWrapper, InputTextField } from '@core/components';
import classNames from 'classnames';
import { ReactElement, useEffect } from 'react';
import { ModalFormProfileType, ModalFormProfileValues } from '@core/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { isEmpty } from 'lodash';
import { LoadingButton } from '@mui/lab';

export const ModalFormProfile = (props: ModalFormProfileType): ReactElement => {
  const {
    mode,
    className,
    onClick,
    user,
    status
  } = props;

  const methods = useForm<ModalFormProfileValues>({
    mode: 'all',
    defaultValues: {
      name: '',
      address: '',
      contactNumber: '',
    },
  });

  useEffect(() => {
    if (!isEmpty(user) && mode === 'edit') {
      methods.reset({
        id: user.id,
        name: user.name,
        address: user.address,
        contactNumber: user.contactNumber,
      });
    }
  }, [user, mode]);

  const submitRecipe: SubmitHandler<ModalFormProfileValues> = (props): void => {
    onClick(props);
  };

  return (
    <FormWrapper
      className={classNames('flex flex-col gap-6 bg-white', className)}
      methods={methods}
      formProps={{
        onSubmit: methods.handleSubmit(submitRecipe),
      }}
    >
      <Box className="flex flex-col gap-4 w-full">
        <InputTextField
          inputMode="text"
          name="name"
          label="Name"
          variant="outlined"
        />

        <InputTextField
          inputMode="text"
          name="address"
          label="Address"
          variant="outlined"
        />

        <InputTextField
          inputMode="text"
          name="contactNumber"
          label="Contact No."
          variant="outlined"
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
          {mode === 'edit' && 'Edit'}
          {mode === 'create' && 'Create'}
        </LoadingButton>
      </Box>
    </FormWrapper>
  );
};
