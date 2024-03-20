import React from 'react';
import type { User } from '@prisma/client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MdDelete } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import { Button } from '../ui/button';

type Props = {
  users: [User];
};

function UserTableList({ users }: Props) {
  let objKeys = Object.keys(users[0]);

  return (
    <div className='h-fit whitespace-nowrap overflow-x-auto relative'>
      <Table className='bg-slate-900 '>
        <TableHeader>
          <TableRow className='hover:bg-slate-800'>
            {users
              .map((user) => Object.keys(user))[0]
              .map((key) => (
                <TableHead key={key} className='w-[100px]'>
                  {key}
                </TableHead>
              ))}
            <TableHead className='w-[100px]'>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className='hover:bg-slate-800'>
              {objKeys.map((key: string) => (
                <TableCell key={user[key]} className='font-medium'>
                  {user[key]}
                </TableCell>
              ))}
              <TableCell className='flex gap-2'>
                <Button size='icon'>
                  <AiOutlineEdit />
                </Button>
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

export default UserTableList;
