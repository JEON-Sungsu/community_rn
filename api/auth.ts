import { Profile } from '@/types';
import { getSecureStorage } from '@/utils/secureStore';
import axiosInstance from './axios';

type RequestUser = {
  email: string;
  password: string;
};

async function postSignup(body: RequestUser): Promise<void> {
  const data = await axiosInstance.post('/auth/signup', body);

  return data.data;
}

async function postLogin(body: RequestUser): Promise<{ accessToken: string }> {
  const data = await axiosInstance.post('/auth/signin', body);

  return data.data;
}

async function getMe(): Promise<Profile> {
  const accessToken = await getSecureStorage('accessToken');
  const data = await axiosInstance.get('/auth/me', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return data.data;
}

export { getMe, postLogin, postSignup };
