import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

describe('Search component', () => {
  it('renders Search', () => {
    render(<Search />);
  });
});
