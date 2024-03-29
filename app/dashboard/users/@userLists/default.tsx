import React from 'react';
import Link from 'next/link';
import type { User } from '@prisma/client';
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
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { AiOutlineEdit } from 'react-icons/ai';

async function UserLists() {
  const response = await fetch(`http://localhost:3000/api/user`, {
    method: 'GET',
    headers: headers(),
    credentials: 'include',
    cache: 'no-cache',
  });

  if (!response.ok) {
    return notFound();
  }

  const { users }: { users: User[] } = await response.json();

  return (
    <ScrollArea>
      <Table className='bg-slate-900 whitespace-nowrap lg:whitespace-normal'>
        <TableHeader>
          <TableRow className='hover:bg-slate-800'>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Email Verified</TableHead>
            <TableHead>Avatar</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date Create</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users?.map((user) => (
            <TableRow key={user.id} className='hover:bg-slate-800'>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {user.emailVerified ? 'Đã xác thực' : 'Chưa xác thực'}
              </TableCell>
              <TableCell>{user.image}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.createdAt.slice(0, 10)}</TableCell>
              <TableCell className='flex gap-2'>
                <Link
                  href='/dashboard/users/[userId]'
                  as={`/dashboard/users/${user.id}`}
                  scroll={false}
                >
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
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  );
}

export default UserLists;
