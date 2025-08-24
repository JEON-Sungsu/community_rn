import { colors } from '@/constants';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

interface InptuFieldProps extends TextInputProps {
  label: string;
  variant?: 'filled' | 'standard' | 'outlined';
}

function InptuField({ label, variant = 'filled', ...props }: InptuFieldProps) {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.container, styles[variant]]}>
        <TextInput
          {...props}
          style={styles.input}
          placeholderTextColor={colors.GRAY_500}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  label: {
    fontSize: 12,
    color: colors.GRAY_700,
    marginBottom: 5,
  },
  filled: {
    backgroundColor: colors.GRAY_100,
  },
  standard: {},
  outlined: {},
  input: {
    fontSize: 16,
    padding: 0,
    flex: 1,
  },
});

export default InptuField;
