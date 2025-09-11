import useAuth from '@/hooks/queries/useAuth';
import { router, useFocusEffect } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface AuthRouteProps {
  children: React.ReactNode;
}

function AuthRoute({ children }: AuthRouteProps) {
  const { auth } = useAuth();

  useFocusEffect(() => {
    !auth.id && router.replace('/auth');
  });
  return <View>{children}</View>;
}

const styles = StyleSheet.create({});

export default AuthRoute;
