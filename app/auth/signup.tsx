import EmailInput from '@/components/EmailInput';
import FixedBottomCTA from '@/components/FixedBottomCTA';
import PasswordConfirmInput from '@/components/PasswordConfirmInput';
import PasswordInput from '@/components/PasswordInput';
import { colors } from '@/constants';
import useAuth from '@/hooks/queries/useAuth';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

type FormValues = {
  email: string;
  password: string;
};

function SignupScreen() {
  const { signupMutation } = useAuth();
  const signupForm = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onsubmit = (data: FormValues) => {
    console.log('onsubmit', data);
    signupMutation.mutate({ email: data.email, password: data.password });
  };

  return (
    <FormProvider {...signupForm}>
      <View style={styles.container}>
        <EmailInput />
        <PasswordInput submitBehavior='submit' />
        <PasswordConfirmInput />
      </View>
      <FixedBottomCTA
        label='가입하기'
        onPress={signupForm.handleSubmit(onsubmit)}
      />
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
  fixed: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.GRAY_300,
    paddingTop: 12,
    paddingHorizontal: 16,
  },
});

export default SignupScreen;
