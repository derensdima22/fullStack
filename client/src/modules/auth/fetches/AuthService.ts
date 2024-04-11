import axios, { AxiosResponse } from 'axios';
import $api, { API_URL } from '@app/http';
import { AuthLoginFetchDataValue, AuthResponse } from '../types';

export const authLogin = (payload: AuthLoginFetchDataValue): Promise<AxiosResponse<AuthResponse>> => {
    return $api.post<AuthResponse>('/login', payload);
};

export const authRegistration = (payload: AuthLoginFetchDataValue): Promise<AxiosResponse<AuthResponse>> => {
    console.log(payload);

    return $api.post<AuthResponse>('/registration', payload);
};

export const authEdit = (payload: AuthLoginFetchDataValue): Promise<AxiosResponse<AuthResponse>> => {
    return $api.post<AuthResponse>('/edit', payload);
};

export const authLogout = (): Promise<void> => {
    return $api.post('/logout');
};

export const authChecked = async (): Promise<AxiosResponse<AuthResponse>> => {
    return await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true });
};

