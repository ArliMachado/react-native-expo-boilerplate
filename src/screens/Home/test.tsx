import React from 'react';
import { render } from '@testing-library/react-native';

import { Home } from '.';

describe('Home Screen', () => {
  it('should be screen title ', () => {
    const { getByTestId } = render(<Home />);

    const textTitle = getByTestId('text-title');

    expect(textTitle.props.children).toContain('Home');
  });
});
