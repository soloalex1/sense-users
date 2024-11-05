import fetchMock from 'jest-fetch-mock';

import { act, render, screen, fireEvent } from '../../test/utils';
import { userMock } from '../../test/mockUsers';

import HomePage from '.';

describe('Home', () => {
  beforeEach(() => {
    fetchMock.mockResponse(JSON.stringify(userMock));
  });

  it('should render minimal info and controls', async () => {
    await act(async () => render(<HomePage />));

    const header = screen.getByText(/lista de usuários/i);
    expect(header).toBeVisible();

    const search = screen.getByPlaceholderText(/pesquise usuários pelo nome/i);
    expect(search).toBeVisible();
    expect(search).toBeEnabled();

    const searchButton = screen.getByText(/^pesquisar$/i);
    expect(searchButton).toBeVisible();
    expect(searchButton).toBeEnabled();
  });

  it('should have search input fully operable', async () => {
    await act(async () => render(<HomePage />));

    const search = screen.getByPlaceholderText(/pesquise usuários pelo nome/i);

    await act(async () => search.focus());
    expect(search).toHaveFocus();

    await act(async () => search.blur());
    expect(search).not.toHaveFocus();

    fireEvent.change(search, { target: { value: 'changed' } });
    expect(search).toHaveValue('changed');
  });

  it('should have search button fully operable', async () => {
    await act(async () => render(<HomePage />));

    const searchButton = screen.getByText(/pesquisar/i);

    await act(async () => searchButton.focus());
    expect(searchButton).toHaveFocus();

    await act(async () => searchButton.blur());
    expect(searchButton).not.toHaveFocus();
  });

  it('should have view controls fully operable', async () => {
    await act(async () => render(<HomePage />));

    const tableButton = screen.getByRole('radio', { name: 'Tabela' });
    expect(tableButton).toBeVisible();
    expect(tableButton).toBeEnabled();

    const listButton = screen.getByRole('radio', { name: 'Lista' });
    expect(listButton).toBeVisible();
    expect(listButton).toBeEnabled();

    fireEvent.click(tableButton);
    expect(screen.queryByLabelText(/lista de usuários/i)).toBeNull();
    expect(await screen.findByLabelText(/tabela de usuários/i)).toBeVisible();

    fireEvent.click(listButton);
    expect(screen.queryByLabelText(/tabela de usuários/i)).toBeNull();
    expect(await screen.findByLabelText(/lista de usuários/i)).toBeVisible();
  });
});
