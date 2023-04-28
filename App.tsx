import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function EmptyExample() {
  const sv = useSharedValue(0);

  useEffect(() => {
    sv.value = 0;
    sv.value = withRepeat(
      withTiming(360, {duration: 1000, easing: Easing.linear}),
      -1,
    );
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${sv.value}deg`}],
    };
  });

  return (
    <View style={styles.container}>
      <Text>It works!</Text>
      <Animated.Text style={[styles.text, style]}>🤡</Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 100,
  },
});
