import { render } from '../../testUtils';
import { fireEvent, screen } from '@testing-library/dom';

import HomePage from '.';

describe('Home', () => {
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

  it('should have search input fully operable', () => {
    render(<HomePage />);

    const search = screen.getByPlaceholderText(/pesquise usuários pelo nome/i);

    search.focus();
    expect(search).toHaveFocus();

    search.blur();
    expect(search).not.toHaveFocus();

    fireEvent.change(search, { target: { value: 'changed' } });
    expect(search).toHaveValue('changed');
  });

  it('should have search button fully operable', () => {
    render(<HomePage />);

    const searchButton = screen.getByText(/pesquisar/i);

    searchButton.focus();
    expect(searchButton).toHaveFocus();

    searchButton.blur();
    expect(searchButton).not.toHaveFocus();
  });

  it('should have view controls fully operable', () => {
    render(<HomePage />);

    const tableButton = screen.getByLabelText(/tabela/i);
    expect(tableButton).toBeVisible();
    expect(tableButton).toBeEnabled();

    const listButton = screen.getByLabelText(/^lista$/i);
    expect(listButton).toBeVisible();
    expect(listButton).toBeEnabled();
  });
});
