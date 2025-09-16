import { createPost } from '@/api/post';
import queryClient from '@/api/queryClient';
import { queryKeys } from '@/constants';
import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';

function useCreatePost() {
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      router.replace('/');
      queryClient.invalidateQueries({
        queryKey: [queryKeys.POST, queryKeys.GET_POSTS],
      });
    },
    onError: (e) => {
      console.log('create post error', e);
    },
  });
}

export default useCreatePost;
