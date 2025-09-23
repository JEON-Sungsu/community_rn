import { colors } from '@/constants';
import { Feather } from '@expo/vector-icons';
import { Link, router, Stack } from 'expo-router';

export default function PostLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: colors.BLACK,
        contentStyle: { backgroundColor: colors.WHITE },
      }}
    >
      <Stack.Screen
        name='write'
        options={{
          headerShown: true,
          title: '글쓰기',
          headerLeft: () => (
            <Link href='/' replace>
              <Feather name='arrow-left' size={28} color={colors.BLACK} />
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name='update/[id]'
        options={{
          headerShown: true,
          title: '수정',
          headerLeft: () => (
            <Feather
              name='arrow-left'
              size={28}
              color={colors.BLACK}
              onPress={router.back}
            />
          ),
        }}
      />
    </Stack>
  );
}
