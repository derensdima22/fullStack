import { InputTextFieldProps } from '@core/types';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconButton, TextField } from '@mui/material';
import React, { ReactElement, useCallback, useState } from 'react';
import { Controller, FieldPathValue, useFormContext } from 'react-hook-form';
import { FieldPath } from 'react-hook-form/dist/types/path';

export const PasswordField = (props: InputTextFieldProps): ReactElement => {
  const {
    name,
    label,
    // validationOptions,
    ...textFieldProps
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const methods = useFormContext();

  const handleClickShowPassword = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword((prevState) => !prevState);
  }, []);

  return (
    <Controller
      name={name}
      control={methods?.control}
      defaultValue={'' as FieldPathValue<Record<string, string | number>, FieldPath<Record<string, string | number>>>}
      render={({ field: { ref, ...field }, fieldState }) => (
        <TextField
          {...textFieldProps}
          {...field}
          type={showPassword ? 'text' : 'password'}
          label={label}
          inputRef={ref}
          id={name}
          error={!!fieldState.error}
          helperText={fieldState.error?.message ?? ''}
          InputProps={{
            ...textFieldProps.InputProps,
            endAdornment: (
              <IconButton
                size="small"
                disabled={textFieldProps.disabled}
                color={!!methods?.formState.errors[name] ? 'error' : 'default'}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff fontSize="small"/> : <Visibility fontSize="small"/>}
              </IconButton>
            ),
          }}
        />
      )}
    />
  );
};
