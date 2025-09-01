import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import InptuField from './InptuField';

interface PasswordInputProps {
  submitBehavior?: TextInputProps['submitBehavior'];
}

function PasswordInput({
  submitBehavior = 'blurAndSubmit',
}: PasswordInputProps) {
  const { control, setFocus } = useFormContext();
  return (
    <Controller
      name='password'
      control={control}
      rules={{
        validate: (data) => {
          if (data.length === 0) {
            return '비밀번호를 입력해주세요.';
          }
          if (data.length < 8) {
            return '비밀번호는 최소 8자 이상이어야 합니다.';
          }
        },
      }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <InptuField
          ref={ref}
          label='비밀번호'
          placeholder='비밀번호를 입력해주세요.'
          textContentType='oneTimeCode'
          returnKeyType='next'
          submitBehavior={submitBehavior}
          value={value}
          secureTextEntry
          onChangeText={onChange}
          error={error?.message}
          onSubmitEditing={() => setFocus('passwordConfirm')}
        />
      )}
    />
  );
}

export default PasswordInput;
