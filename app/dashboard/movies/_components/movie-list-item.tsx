'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Prisma } from '@prisma/client';
import { TableCell, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { deleteMovieById } from '@/lib/actions/deleteMovie';
import { MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';

type Props = {
  movie: Prisma.MovieGetPayload<{ include: { categories: true } }>;
};

function MovieListItem({ movie }: Props) {
  const onHandleDelete = (id: number) => {
    deleteMovieById(id);
  };

  return (
    <TableRow key={movie.id} className='hover:bg-gray-200'>
      <TableCell className='flex flex-col gap-1 p-6 lg:flex-row lg:gap-5'>
        <div className='flex flex-col gap-2'>
          <p className='text-rose-700'>
            {movie.name}{' '}
            <span className='text-emerald-500'>[{movie.year}]</span>
          </p>
          <p className='text-gray-500 text-xs'>
            ({movie.origin_name}){' '}
            <span className='text-red-700 font-medium tracking-wide'>
              {movie.episode_current && `[${movie.episode_current}]`}
            </span>
          </p>
          <div className='space-x-1'>
            {movie.type && (
              <Badge
                className={`${
                  movie.type === 'single' &&
                  'bg-gray-300 font-light text-black hover:bg-gray-300'
                } ${
                  movie.type === 'series' &&
                  'bg-indigo-500 font-light text-white hover:bg-indigo-500'
                } w-max tracking-wide`}
                variant='secondary'
              >
                {movie.type === 'single' && 'Phim lẻ'}
                {movie.type === 'series' && 'Phim bộ'}
                {movie.type === 'hoathinh' && 'Hoạt hình'}
                {movie.type === 'tvshows' && 'Tv shows'}
              </Badge>
            )}
            <Badge variant={movie.status === 'completed' ? 'success' : 'info'}>
              {movie.status === 'completed' ? 'Hoàn thành' : 'Đang chiếu'}
            </Badge>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <Image
          src={movie.poster_url || ''}
          width={50}
          height={50}
          alt={movie.name}
          priority
          className='h-auto w-auto object-fill relative'
        />
      </TableCell>
      <TableCell className='hidden md:table-cell'>
        {movie.categories.map((cat) => (
          <Badge key={cat.id} variant='default' className='mr-1'>
            {cat.name}
          </Badge>
        ))}
      </TableCell>
      <TableCell>{movie.createdAt.toString().slice(0, 10)}</TableCell>
      <TableCell>{movie.view}</TableCell>
      <TableCell className='hidden lg:table-cell'>
        <Link
          href='/dashboard/movies/[movieId]/edit'
          as={`/dashboard/movies/${movie.slug}/edit`}
          scroll={false}
        >
          <Button
            size='icon'
            className='size-6 text-white mr-1 bg-green-500 hover:bg-green-600'
          >
            <MdEdit />
          </Button>
        </Link>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size='icon'
              className='size-6 text-white bg-red-500 hover:bg-red-600'
            >
              <FaTrash />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <div>
              <h1 className='mb-2'>
                Bạn có chắc chắn muốn xoá phim ?{' '}
                <span className='text-red-700'>{movie.name}</span>
              </h1>

              <Button
                variant='destructive'
                onClick={() => onHandleDelete(movie.id)}
              >
                Đồng ý
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  );
}

export default MovieListItem;
