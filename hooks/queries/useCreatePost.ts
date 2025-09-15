import { createPost } from '@/api/post';
import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';

function useCreatePost() {
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      router.replace('/');
    },
    onError: (e) => {
      console.log('create post error', e);
    },
  });
}

export default useCreatePost;
