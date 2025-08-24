import FixedBottomCTA from '@/components/FixedBottomCTA';
import InptuField from '@/components/InptuField';
import React from 'react';
import { StyleSheet, View } from 'react-native';

function LoginScreen() {
  return (
    <>
      <View style={styles.container}>
        <InptuField label='이메일' placeholder='이메일을 입력해주세요.' />
        <InptuField label='비밀번호' placeholder='비밀번호를 입력해주세요.' />
      </View>
      <FixedBottomCTA label='로그인' onPress={() => {}} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});

export default LoginScreen;
