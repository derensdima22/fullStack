import { InputCheckboxFieldProps } from '@core/types';
import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import React, { ReactElement } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const InputCheckboxField = (props: InputCheckboxFieldProps): ReactElement => {
  const {
    name,
    label,
    ...formControlProps
  } = props;

  const methods = useFormContext();
  const error = methods.getFieldState(name).error;

  return (
    <Controller
      name={name}
      control={methods.control}
      render={({ field: props }) => (
        <FormControl error={!!error}>
          <FormControlLabel
            {...formControlProps}
            label={label}
            control={
              <Checkbox
                {...props}
                checked={props.value}
                onChange={(e) => props.onChange(e.target.checked)}
              />
            }/>
          {error && (
            <FormHelperText>{error?.message}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};
