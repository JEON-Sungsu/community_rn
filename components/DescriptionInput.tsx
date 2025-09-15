import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import InptuField from './InptuField';

function DescriptionInput() {
  const { control } = useFormContext();
  return (
    <Controller
      name='description'
      control={control}
      rules={{
        validate: (data) => {
          if (data.length < 0) {
            return '내용을 5자 이상 입력해주세요.';
          }
        },
      }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <InptuField
          ref={ref}
          label='내용'
          placeholder='내용을 입력해주세요.'
          returnKeyType='next'
          value={value}
          onChangeText={onChange}
          error={error?.message}
          multiline={true}
        />
      )}
    />
  );
}

export default DescriptionInput;
