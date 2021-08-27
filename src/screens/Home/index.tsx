import React from 'react';
import { Text } from 'react-native';

import * as S from './styles';

export function Home() {
  return (
    <S.Wrapper>
      <Text testID="text-title">Home</Text>
    </S.Wrapper>
  );
}
