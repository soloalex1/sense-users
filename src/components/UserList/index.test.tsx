import { render, screen } from '../../test/utils';

import { userMock } from '../../test/mockUsers';

import UserList from '.';

describe('UserList', () => {
  it('should render all users correctly', () => {
    render(<UserList users={userMock} isLoading={false} />);

    userMock.map((user) => {
      expect(screen.getByText(user.name)).toBeVisible();
      expect(screen.getByText(user.phone)).toBeVisible();
      expect(screen.getByText(user.email)).toBeVisible();
    });
  });

  it('should not render anything without users', () => {
    render(<UserList users={[]} isLoading={false} />);

    const userListContainer = screen.getByRole('grid');
    expect(userListContainer).toBeEmptyDOMElement();
  });

  it('should render only the loading state when loading', () => {
    render(<UserList users={[]} isLoading />);

    const spinner = screen.getByRole('progressbar');
    expect(spinner).toBeVisible();

    const grid = screen.queryByRole('grid');
    expect(grid).toBeNull();
  });
});
