import { render, screen } from '../../test/utils';

import { userMock } from '../../test/mockUsers';

import UserList from '.';

describe('UserList', () => {
  it('should render all users correctly', () => {
    render(<UserList users={userMock} />);

    userMock.map((user) => {
      expect(screen.getByText(user.name)).toBeVisible();
      expect(screen.getByText(user.phone)).toBeVisible();
      expect(screen.getByText(user.email)).toBeVisible();
    });
  });

  it('should not render anything without users', () => {
    render(<UserList users={[]} />);

    const userListContainer = screen.getByRole('grid');
    expect(userListContainer).toBeEmptyDOMElement();
  });
});
