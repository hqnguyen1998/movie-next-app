import React from 'react';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MdDelete } from 'react-icons/md';
import { Button } from '@/components/ui/button';
import UserModal from '@/components/UserModal/UserModal';
import { AiOutlineEdit } from 'react-icons/ai';
import Link from 'next/link';

async function UserLists() {
  const response = await fetch(`http://localhost:3000/api/user`, {
    method: 'GET',
    headers: headers(),
    credentials: 'include',
    next: {
      revalidate: 60 * 60,
    },
  });

  if (!response.ok) {
    return notFound();
  }

  const { users } = await response.json();
  const keys = Object.keys(users[0]);

  return (
    <div className='h-fit whitespace-nowrap overflow-x-auto relative'>
      <Table className='bg-slate-900 '>
        <TableHeader>
          <TableRow className='hover:bg-slate-800'>
            {users
              .map((user) => Object.keys(user))[0]
              .map((key) => (
                <TableHead key={key}>{key}</TableHead>
              ))}
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users?.map((user) => (
            <TableRow key={user.id} className='hover:bg-slate-800'>
              {keys.map((key: string) => (
                <TableCell key={user[key]} className='font-medium'>
                  {user[key]}
                </TableCell>
              ))}
              <TableCell className='flex gap-2'>
                <Link href={`/dashboard/users/${user.id}`} scroll={false}>
                  <Button size='icon'>
                    <AiOutlineEdit />
                  </Button>
                </Link>
                {user.role !== 'administrator' && (
                  <Button variant='destructive'>
                    <MdDelete />
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default UserLists;
