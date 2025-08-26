import EmailInput from '@/components/EmailInput';
import FixedBottomCTA from '@/components/FixedBottomCTA';
import PasswordInput from '@/components/PasswordInput';
import { colors } from '@/constants';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

type FormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

function LoginScreen() {
  const loginForm = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const onsubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <FormProvider {...loginForm}>
      <View style={styles.container}>
        <EmailInput />
        <PasswordInput />
      </View>
      <FixedBottomCTA
        label='가입하기'
        onPress={loginForm.handleSubmit(onsubmit)}
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

export default LoginScreen;
