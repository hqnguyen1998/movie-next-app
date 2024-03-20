import React from 'react';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import UserTableList from '@/components/Table/UserTableList';

async function UserPage() {
  const response = await fetch(`http://localhost:3000/api/user`, {
    method: 'GET',
    headers: headers(),
    credentials: 'include',
  });

  if (!response.ok) {
    return notFound();
  }

  const data = await response.json();

  return (
    <div className='py-3 px-6'>
      <UserTableList users={data.users} />
    </div>
  );
}

export default UserPage;
