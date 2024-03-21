import React from 'react';

type Props = {
  children: React.ReactNode;
  userLists: React.ReactNode;
};

function UserLayout({ children, userLists }: Props) {
  return (
    <div className='py-3 px-6'>
      {userLists}
      {children}
    </div>
  );
}

export default UserLayout;
