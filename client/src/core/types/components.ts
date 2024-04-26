import { UserType } from '@app/models/UserType';
import { FormControlLabelProps, ModalProps, TextFieldProps } from '@mui/material';
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

export interface ProfileType {
  user: UserType;
  status: string;
  onClick: (props: ModalFormProfileValues) => void;
  isLoadState: boolean;
}

export interface ProfileInfoType extends Omit<ProfileType, 'onClick' | 'isLoadState'> {
}

export interface BaseModalProps extends Omit<ModalProps, 'children'> {
  children?: ReactNode;
}

export interface ModalWrapperProps extends BaseModalProps {
  header: string;
}

export interface ModalFormProfileType {
  mode: 'create' | 'edit';
  status: string;
  className?: string;
  user?: UserType;
  onClick: (props: ModalFormProfileValues) => void;
}

export interface ModalFormProfileValues
  extends Omit<UserType, 'email' | 'isActivated'>{}
