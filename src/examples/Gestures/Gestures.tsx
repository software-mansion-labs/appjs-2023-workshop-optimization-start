import { AnimatedWithGestureResponder } from './AnimatedWithGestureResponder';
import React from 'react';
import { ReanimatedWithGestureHandler } from './ReanimatedWithGestureHandler';

export function Gestures() {
  return (
    <>
      <AnimatedWithGestureResponder />
      <ReanimatedWithGestureHandler />
    </>
  );
}
