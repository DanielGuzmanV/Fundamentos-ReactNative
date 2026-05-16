import { useColorScheme } from '@/src/core/hooks/useColorScheme';
import React, { useEffect, useRef } from 'react';
import { Animated, DimensionValue, ViewStyle } from 'react-native';

interface Props {
  width: DimensionValue;
  height: DimensionValue;
  borderRadius?: number;
  style?: ViewStyle;
}

export const Skeleton = ({ width, height, borderRadius = 8, style }: Props) => {
  const colorScheme = useColorScheme() ?? 'light';
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    // Efecto de pulso infinito (Concepto Avanzado: Animaciones)
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.7,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacity]);

  const backgroundColor = colorScheme === 'dark' ? '#334155' : '#E2E8F0';

  return (
    <Animated.View
      style={[
        {
          width,
          height,
          borderRadius,
          backgroundColor,
          opacity,
        },
        style,
      ]}
    />
  );
};