import { router, useFocusEffect } from 'expo-router';
import { SafeAreaView, Text } from 'react-native';

export default function MyScreen() {
  //화면이 focus 될 때마다 실행
  useFocusEffect(() => {
    router.replace('/auth');
  });
  return (
    <SafeAreaView>
      <Text>내정보 스크린</Text>
    </SafeAreaView>
  );
}
