import { render, screen } from '../../test/utils';

import { userMock } from '../../test/mockUsers';

import UsersTable from '.';

describe('UsersTable', () => {
  it('should render all users correctly', () => {
    render(<UsersTable users={userMock} isLoading={false} />);

    userMock.map((user) => {
      expect(screen.getByText(user.name)).toBeVisible();
      expect(screen.getByText(user.phone)).toBeVisible();
      expect(screen.getByText(user.email)).toBeVisible();
    });
  });

  it('should render only the header without users', () => {
    render(<UsersTable users={[]} isLoading={false} />);

    const tableParts = screen.getAllByRole('rowgroup');

    expect(tableParts).toHaveLength(2);
    expect(tableParts[0]).not.toBeEmptyDOMElement();
    expect(tableParts[1]).toBeEmptyDOMElement();

    const tableHeaderName = screen.getByText(/nome/i);
    expect(tableHeaderName).toBeVisible();

    const tableHeaderPhone = screen.getByText(/telefone/i);
    expect(tableHeaderPhone).toBeVisible();

    const tableHeaderEmail = screen.getByText(/e-mail/i);
    expect(tableHeaderEmail).toBeVisible();
  });

  it('should render only the loading state when loading', () => {
    render(<UsersTable users={[]} isLoading />);

    const spinner = screen.getByRole('progressbar');
    expect(spinner).toBeVisible();

    const table = screen.queryByRole('table');
    expect(table).toBeNull();
  });
});
