import React from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import InptuField from './InptuField';

function PasswordConfirmInput() {
  const { control } = useFormContext();
  const password = useWatch({ control, name: 'password' });
  return (
    <Controller
      name='passwordConfirm'
      control={control}
      rules={{
        validate: (data) => {
          if (data !== password) {
            return '비밀번호가 일치하지 않습니다.';
          }
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
          label='비밀번호 확인'
          placeholder='비밀번호를 입력해주세요.'
          value={value}
          onChangeText={onChange}
          error={error?.message}
          secureTextEntry
        />
      )}
    />
  );
}

export default PasswordConfirmInput;
