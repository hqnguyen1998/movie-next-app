'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useMovieContext } from '@/lib/context/context';

type Props = {
  chieurap?: boolean | null;
  is_copyright?: boolean | null;
  is_recommended?: boolean | null;
  is_sensitive_content?: boolean | null;
};

function MovieExtraInfoTab({
  chieurap,
  is_copyright,
  is_recommended,
  is_sensitive_content,
}: Props) {
  const { movie, setMovie } = useMovieContext();
  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovie({ ...movie, [e.target.name]: e.target.checked });
  };

  return (
    <div className='space-y-3'>
      <div className='max-w-max flex flex-row items-center space-x-2'>
        <Input
          type='checkbox'
          className='size-4'
          id='chieurap'
          name='chieurap'
          defaultChecked={chieurap !== null && chieurap}
          onChange={onHandleChange}
        />
        <Label htmlFor='chieurap'>Phim chiếu rạp</Label>
      </div>
      <div className='max-w-max flex flex-row items-center space-x-2'>
        <Input
          type='checkbox'
          className='size-4'
          id='is_copyright'
          name='is_copyright'
          defaultChecked={is_copyright !== null && is_copyright}
          onChange={onHandleChange}
        />
        <Label htmlFor='is_copyright'>có bản quyền phim</Label>
      </div>
      <div className='max-w-max flex flex-row items-center space-x-2'>
        <Input
          type='checkbox'
          className='size-4'
          id='is_sensitive_content'
          name='is_sensitive_content'
          defaultChecked={is_sensitive_content !== null && is_sensitive_content}
          onChange={onHandleChange}
        />
        <Label htmlFor='is_sensitive_content'>
          Cảnh báo nội dung người lớn
        </Label>
      </div>
      <div className='max-w-max flex flex-row items-center space-x-2'>
        <Input
          type='checkbox'
          className='size-4'
          id='is_recommended'
          name='is_recommended'
          defaultChecked={is_recommended !== null && is_recommended}
          onChange={onHandleChange}
        />
        <Label htmlFor='is_recommended'>Đề cử</Label>
      </div>
    </div>
  );
}

export default MovieExtraInfoTab;
