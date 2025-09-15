import { colors } from '@/constants';
import React, { ForwardedRef, forwardRef } from 'react';
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
  error?: string;
}

function InptuField(
  { label, variant = 'filled', error = '', ...props }: InptuFieldProps,
  ref?: ForwardedRef<TextInput>
) {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.container,
          styles[variant],
          Boolean(error) && styles.inputError,
          props.multiline && styles.multiline,
        ]}
      >
        <TextInput
          {...props}
          style={styles.input}
          placeholderTextColor={colors.GRAY_500}
          autoCapitalize='none'
          spellCheck={false}
          autoCorrect={false}
        />
      </View>
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
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
  error: {
    fontSize: 12,
    marginTop: 5,
    color: colors.RED_500,
  },
  inputError: {
    backgroundColor: colors.RED_100,
  },
  multiline: {
    alignItems: 'flex-start',
    height: 200,
    paddingVertical: 10,
  },
});

export default forwardRef(InptuField);
