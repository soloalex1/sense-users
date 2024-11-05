import { render, screen } from '../../test/utils';

import { userMock } from '../../test/mockUsers';
import { User } from '../../types';

import UserCard from '.';
import { GridList } from 'react-aria-components';

describe('UserCard', () => {
  let randomUserIndex = 0;
  let randomUser = {} as User;

  const renderWithWrapper = (Component: JSX.Element) => {
    return render(<GridList aria-label="test grid list">{Component}</GridList>);
  };

  beforeEach(() => {
    randomUserIndex = Math.floor(Math.random() * userMock.length);
    randomUser = userMock[randomUserIndex];
  });

  it('should match the snapshot', () => {
    const user = userMock[0];

    const tree = renderWithWrapper(<UserCard user={user} />);
    expect(tree).toMatchSnapshot();
  });

  it('given a specific user, it should render its details correctly', () => {
    renderWithWrapper(<UserCard user={randomUser} />);

    const userName = screen.getByText(randomUser.name);
    expect(userName).toBeVisible();

    const userPhone = screen.getByText(randomUser.phone);
    expect(userPhone).toBeVisible();

    const userEmail = screen.getByText(randomUser.email);
    expect(userEmail).toBeVisible();
  });
});
