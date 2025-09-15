import FeedList from '@/components/FeedList';
import { colors } from '@/constants';
import useAuth from '@/hooks/queries/useAuth';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const { auth } = useAuth();
  const router = useRouter();

  console.log(auth.id);

  return (
    <SafeAreaView style={styles.container}>
      <FeedList />
      <Pressable
        style={styles.writeButton}
        onPress={() => {
          router.push('/post/write');
        }}
      >
        <Ionicons name='pencil' size={32} color={colors.WHITE} />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    position: 'relative',
  },
  writeButton: {
    position: 'absolute',
    bottom: 90,
    right: 16,
    width: 64,
    height: 64,
    backgroundColor: colors.ORANGE_600,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
    zIndex: 1000,
  },
});
