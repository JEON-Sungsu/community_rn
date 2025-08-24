import FixedBottomCTA from '@/components/FixedBottomCTA';
import InptuField from '@/components/InptuField';
import { colors } from '@/constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';

function SignupScreen() {
  return (
    <>
      <View style={styles.container}>
        <InptuField label='이메일' placeholder='이메일을 입력해주세요.' />
        <InptuField label='비밀번호' placeholder='비밀번호를 입력해주세요.' />
        <InptuField
          label='비밀번호 확인'
          placeholder='비밀번호를 입력해주세요.'
        />
      </View>
      <FixedBottomCTA label='가입하기' onPress={() => {}} />
    </>
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
