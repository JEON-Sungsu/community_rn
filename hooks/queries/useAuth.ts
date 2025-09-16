import { getMe, postLogin, postSignup } from '@/api/auth';
import queryClient from '@/api/queryClient';
import { queryKeys } from '@/constants';
import { removeHeader, setHeader } from '@/utils/header';
import {
  deleteSecureStore,
  getSecureStorage,
  saveSecureStore,
} from '@/utils/secureStore';
import { useMutation, useQuery } from '@tanstack/react-query';
import { router } from 'expo-router';
import { useEffect } from 'react';

function useGetMe() {
  const { data, isError, isSuccess } = useQuery({
    queryFn: getMe,
    queryKey: [queryKeys.AUTH, queryKeys.GET_ME],
  });

  useEffect(() => {
    (async () => {
      if (isSuccess) {
        const accessToken = await getSecureStorage('accessToken');
        setHeader('Authorization', `Bearer ${accessToken}`);
      }
    })();
  }),
    [isSuccess];

  useEffect(() => {
    if (isError) {
      removeHeader('Authorization');
      deleteSecureStore('accessToken');
    }
  }, [isError]);

  return { data };
}

function useLogin() {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: async ({ accessToken }) => {
      setHeader('Authorization', `Bearer ${accessToken}`);
      await saveSecureStore('accessToken', accessToken);
      queryClient.fetchQuery({ queryKey: ['auth', 'me'] });

      router.replace('/');
    },
    onError: (e) => {
      console.log('signup error', e);
    },
  });
}

function useSignup() {
  return useMutation({
    mutationFn: postSignup,
    onSuccess: () => {
      console.log('signup success');
      router.replace('/auth/login');
    },
    onError: (e) => {
      console.log('signup error', e);
    },
  });
}

function useAuth() {
  const { data } = useGetMe();
  const loginMutation = useLogin();
  const signupMutation = useSignup();

  const logout = () => {
    removeHeader('Authorization');
    deleteSecureStore('accessToken');
    queryClient.resetQueries({ queryKey: ['auth'] });
    router.replace('/auth/login');
  };

  return {
    auth: { id: data?.id || '', nickname: data?.nickname || '' },
    loginMutation,
    signupMutation,
    logout,
  };
}

export default useAuth;
