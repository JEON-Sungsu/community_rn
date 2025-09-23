import CustomButton from '@/components/CustomButton';
import DescriptionInput from '@/components/DescriptionInput';
import TitleInput from '@/components/TitleInput';
import { useGetPost } from '@/hooks/queries/useGetPost';
import useUpdatePost from '@/hooks/queries/useUpdatePost';
import { ImageUri } from '@/types';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type FormValues = {
  title: string;
  description: string;
  imageUris: ImageUri[];
};

export default function PostUpdateScreen() {
  const { id } = useLocalSearchParams();
  const { data: post } = useGetPost(Number(id));
  const updatePost = useUpdatePost();

  const navigation = useNavigation();
  const postForm = useForm<FormValues>({
    defaultValues: {
      title: post?.title,
      description: post?.description,
      imageUris: post?.imageUris,
    },
  });

  const onSubmit = (data: FormValues) => {
    updatePost.mutate(
      { id: Number(id), body: data },
      {
        onSuccess: () => {
          navigation.goBack();
        },
      }
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomButton
          label='저장'
          size='medium'
          variant='standard'
          onPress={postForm.handleSubmit(onSubmit)}
        />
      ),
    });
  }, []);

  return (
    <FormProvider {...postForm}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        contentContainerStyle={styles.container}
      >
        <TitleInput />
        <DescriptionInput />
      </KeyboardAwareScrollView>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: { margin: 16, gap: 16 },
});
