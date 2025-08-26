import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import InptuField from './InptuField';

function EmailInput() {
  const { control } = useFormContext();
  return (
    <Controller
      name='email'
      control={control}
      rules={{
        validate: (data) => {
          if (data.length === 0) {
            return '이메일을 입력해주세요.';
          }
          if (!/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(data)) {
            return '이메일 형식이 올바르지 않습니다.';
          }
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InptuField
          label='이메일'
          placeholder='이메일을 입력해주세요.'
          value={value}
          onChangeText={onChange}
          error={error?.message}
        />
      )}
    />
  );
}

export default EmailInput;
