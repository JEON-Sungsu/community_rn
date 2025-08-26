import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import InptuField from './InptuField';

function PasswordInput() {
  const { control } = useFormContext();
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
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InptuField
          label='비밀번호'
          placeholder='비밀번호를 입력해주세요.'
          value={value}
          secureTextEntry
          onChangeText={onChange}
          error={error?.message}
        />
      )}
    />
  );
}

export default PasswordInput;
