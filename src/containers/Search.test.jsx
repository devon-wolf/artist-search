/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchPage from './SearchPage';
import { MemoryRouter, Route } from 'react-router';
import ArtistPage from './ArtistPage';
import ReleasePage from './ReleasePage';

describe('Search component', () => {
  it('renders Search', async () => {
    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByLabelText('input-search');
    userEvent.type(input, 'The Who');

    const button = screen.getByLabelText('control-button');
    userEvent.click(button); 

    await screen.findByAltText('spinner');

    return waitFor(() => {
      const ul = screen.getByRole('list', { name: 'artists' });
      expect(ul).not.toBeEmptyDOMElement();
    });
  });

  it('render artist search', () => {
    render(
      <MemoryRouter initialEntries={['/artist/afdb7919-059d-43c1-b668-ba1d265e7e42/Marvin%20Gaye']}>
        <Route path="/artist/:artistID/:artistName">
          <ArtistPage/>
        </Route>
      </MemoryRouter>);

    screen.getByAltText('spinner');
    screen.getByText('Marvin Gaye');
    return waitFor(() => {
      const ul = screen.getByRole('list', { name: 'release-list' });
      expect(ul).not.toBeEmptyDOMElement();
    });

  });
  it('displays recordings from a release', () => {
    render(
      <MemoryRouter>
        <Route path="/release/:releaseID/:title">
          <ReleasePage/>
        </Route>
      </MemoryRouter>
    );
  });
});
