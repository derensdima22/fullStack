import axios, { AxiosResponse } from 'axios';
import $api, { API_URL } from '@modules/auth/interceptors';
import { AuthEditFetchDataValue, AuthLoginFetchDataValue, AuthResponse } from '@modules/auth/types';
import { UserType } from '@app/models/UserType';

export const authLogin = (payload: AuthLoginFetchDataValue): Promise<AxiosResponse<AuthResponse>> => {
    return $api.post<AuthResponse>('/login', payload);
};

export const authRegistration = (payload: AuthLoginFetchDataValue): Promise<AxiosResponse<AuthResponse>> => {
    return $api.post<AuthResponse>('/registration', payload);
};

export const authEdit = <T = AuthResponse>(payload: AuthEditFetchDataValue): Promise<AxiosResponse<T>> => {
    console.log('payload', payload);

    return $api.patch<T>(`/user/${payload.id}`, payload);
};

export const authGetUser = <T = UserType>(id: string): Promise<AxiosResponse<T>> => {
    return $api.get<T>(`/user/${id}`);
};

export const authLogout = (): Promise<void> => {
    return $api.post('/logout');
};

export const authChecked = async (): Promise<AxiosResponse<AuthResponse>> => {
    return await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true });
};

