import { FormControlLabelProps, TextFieldProps } from '@mui/material';
import { ReactNode } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export interface FieldWrapperProps {
  name: string;
  label?: ReactNode;
}

export interface FormWrapperProps<T extends FieldValues = FieldValues> {
  methods: UseFormReturn<T>;
  formProps?: JSX.IntrinsicElements['form'];
  children?: ReactNode | ReactNode[];
  className?: string;
}

export interface InputCheckboxFieldProps extends Omit<FormControlLabelProps, 'control'> {
  name: string;
}

export interface InputTextFieldProps extends FieldWrapperProps, Omit<TextFieldProps, 'name' | 'label'> {
  autoCompleteOff?: string;
  className?: string;
}
