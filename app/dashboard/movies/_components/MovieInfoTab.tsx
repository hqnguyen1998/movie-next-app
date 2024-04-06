'use client';
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useMovieContext } from '@/lib/context/context';

function MovieInfoTab() {
  const { movie: currentMovie, setMovie } = useMovieContext();

  const onHandleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMovie({ ...currentMovie, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className='flex flex-col lg:flex-row gap-5'>
        <div className='flex-1'>
          <Label htmlFor='name'>
            Tên phim <span className='text-red-700'>*</span>
          </Label>
          <Input
            placeholder='Tên phim tiếng việt'
            name='name'
            id='name'
            required
            onChange={onHandleChange}
            value={currentMovie.name}
          />
        </div>

        <div className='flex-1'>
          <Label htmlFor='origin_name'>
            Tên Gốc <span className='text-red-700'>*</span>
          </Label>
          <Input
            placeholder='Tên phim tiếng anh'
            name='origin_name'
            id='origin_name'
            value={currentMovie.origin_name}
            onChange={onHandleChange}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor='slug'>Đường dẫn tĩnh</Label>
        <Input
          placeholder='Slug'
          name='slug'
          id='slug'
          value={currentMovie.slug}
          onChange={onHandleChange}
        />
      </div>

      <div>
        <Label htmlFor='thumb_url'>Ảnh thumb</Label>
        <Input
          name='thumb_url'
          id='thumb_url'
          value={currentMovie.thumb_url}
          onChange={onHandleChange}
        />
      </div>

      <div>
        <Label htmlFor='poster_url'>Ảnh Poster</Label>
        <Input
          name='poster_url'
          id='poster_url'
          value={currentMovie.poster_url}
          onChange={onHandleChange}
        />
      </div>

      <div>
        <Label htmlFor='content'>Nội dung</Label>
        <Textarea
          className='flex-1'
          name='content'
          id='content'
          value={currentMovie.content}
          onChange={onHandleChange}
          rows={10}
        />
      </div>

      <div>
        <Label htmlFor='trailer_url'>Trailer Youtube URL</Label>
        <Input
          name='trailer_url'
          id='trailer_url'
          value={currentMovie.trailer_url}
          onChange={onHandleChange}
        />
      </div>

      <div className='flex flex-col lg:flex-row gap-5'>
        <div className='flex-1'>
          <Label htmlFor='time'>Thời lượng tập phim</Label>
          <Input
            placeholder='45 phút'
            name='time'
            id='time'
            value={currentMovie.time}
            onChange={onHandleChange}
          />
        </div>

        <div className='flex-1'>
          <Label htmlFor='episode_current'>Tập phim hiện tại</Label>
          <Input
            placeholder='5'
            name='episode_current'
            id='episode_current'
            value={currentMovie.episode_current}
            onChange={onHandleChange}
          />
        </div>

        <div className='flex-1'>
          <Label htmlFor='episode_current'>Tập phim hiện tại</Label>
          <Input
            placeholder='12'
            name='episode_total'
            id='episode_total'
            value={currentMovie.episode_total}
            onChange={onHandleChange}
          />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-5'>
        <div className='flex-1'>
          <Label htmlFor='lang'>Ngôn ngữ</Label>
          <Input
            name='lang'
            id='lang'
            type='text'
            value={currentMovie.lang}
            onChange={onHandleChange}
          />
        </div>
        <div className='flex-1'>
          <Label htmlFor='quality'>Chất lượng</Label>
          <Input
            name='quality'
            id='quality'
            type='text'
            value={currentMovie.quality}
            onChange={onHandleChange}
          />
        </div>
        <div className='flex-1'>
          <Label htmlFor='year'>Năm xuất bản</Label>
          <Input
            name='year'
            id='year'
            type='text'
            value={currentMovie.year}
            onChange={onHandleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieInfoTab;
