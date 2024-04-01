import React from 'react';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { useMovieContext } from '@/lib/context/context';
import CategoryOptionLists from './CategoryOptionLists';

function MovieExtraInfoTab() {
  const { movie, setMovie } = useMovieContext();

  return (
    <div className='space-y-5'>
      <div className='space-y-2'>
        <Label>
          Định dạng <span className='text-red-700'>*</span>
        </Label>
        <RadioGroup
          name='type'
          defaultValue={movie.type || 'phim-le'}
          onValueChange={(value: string) => setMovie({ ...movie, type: value })}
        >
          <div className='space-x-1 flex items-center'>
            <RadioGroupItem value='phim-le' id='phim-le' />
            <Label htmlFor='phim-le'>Phim Lẻ</Label>
          </div>
          <div className='space-x-1 flex items-center'>
            <RadioGroupItem value='phim-bo' id='phim-bo' />
            <Label htmlFor='phim-bo'>Phim Bộ</Label>
          </div>
        </RadioGroup>
      </div>

      <div className='space-y-2'>
        <Label htmlFor='status'>
          Tình trạng <span className='text-red-700'>*</span>
        </Label>
        <RadioGroup
          defaultValue='completed'
          name='status'
          value={movie.status}
          onValueChange={(value: string) =>
            setMovie({ ...movie, status: value })
          }
        >
          <div className='space-x-1 flex items-center'>
            <RadioGroupItem value='incoming' />
            <Label>Sắp chiếu</Label>
          </div>
          <div className='space-x-1 flex items-center'>
            <RadioGroupItem value='ongoing' />
            <Label>Đang chiếu</Label>
          </div>
          <div className='space-x-1 flex items-center'>
            <RadioGroupItem value='completed' />
            <Label>Hoàn thành</Label>
          </div>
        </RadioGroup>

        <CategoryOptionLists />
      </div>
    </div>
  );
}

export default MovieExtraInfoTab;
