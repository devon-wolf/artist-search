import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Search from './Search';
import { MemoryRouter } from 'react-router';

describe('Search component', () => {
  it('renders Search', () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    const input = screen.getByLabelText('input-search');
    userEvent.type(input, 'The Who');

    const button = screen.getByLabelText('control-button');
    userEvent.click(button);

    screen.findByAltText('spinner');

    return waitFor(() => {

      const ul = screen.getByRole('list', { name: 'artists' });
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
