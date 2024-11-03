import { render } from '../../testUtils';
import { fireEvent, screen } from '@testing-library/dom';
import fetchMock from 'jest-fetch-mock';

import { userMock } from '../../test/mockUsers';

import HomePage from '.';

describe('Home', () => {
  beforeEach(() => {
    fetchMock.mockResponse(JSON.stringify(userMock));
  });

  it('should render minimal info and controls', () => {
    render(<HomePage />);

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
    render(<HomePage />);

    const search = screen.getByPlaceholderText(/pesquise usuários pelo nome/i);

    search.focus();
    expect(search).toHaveFocus();

    search.blur();
    expect(search).not.toHaveFocus();

    fireEvent.change(search, { target: { value: 'changed' } });
    expect(search).toHaveValue('changed');
  });

  it('should have search button fully operable', async () => {
    render(<HomePage />);

    const searchButton = screen.getByText(/pesquisar/i);

    searchButton.focus();
    expect(searchButton).toHaveFocus();

    searchButton.blur();
    expect(searchButton).not.toHaveFocus();
  });

  it('should have view controls fully operable', async () => {
    render(<HomePage />);

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
