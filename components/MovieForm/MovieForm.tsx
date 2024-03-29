'use client';
import React, { useRef } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { movieFormSchema } from '@/lib/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { MovieWithCategory } from '../../app/dashboard/movies/_components/movie-table';

function MovieForm({
  movie,
  action,
}: {
  movie?: MovieWithCategory;
  action?: (formData: FormData) => Promise<void>;
}) {
  const ref = useRef(null);
  const form = useForm<z.infer<typeof movieFormSchema>>({
    resolver: zodResolver(movieFormSchema),
    defaultValues: {
      name: '',
      origin_name: '',
      slug: '',
      content: '',
      type: '',
      status: '',
      poster_url: '',
      thumb_url: '',
      chieurap: false,
      trailer_url: '',
      time: '',
      episode_current: '',
      episode_total: '',
      quality: '',
      lang: '',
      showtimes: '',
      year: 2023,
      actors: '',
      directors: '',
      category: [],
    },
  });

  return (
    <Form {...form}>
      <form ref={ref} action={action} className='flex flex-col gap-5 mt-5'>
        <div className='flex flex-col lg:flex-row gap-5'>
          <Input
            placeholder='Tên phim tiếng việt'
            name='name'
            defaultValue={movie?.name}
          />
          <Input
            placeholder='Tên phim tiếng anh'
            name='origin_name'
            defaultValue={movie?.origin_name || ''}
          />
          <Select name='type' defaultValue={movie?.type}>
            <SelectTrigger className='w-full lg:w-[300px]'>
              <SelectValue placeholder='Thể loại' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='series'>Phim Bộ</SelectItem>
              <SelectItem value='single'>Phim Lẻ</SelectItem>
              <SelectItem value='hoathinh'>Hoạt Hình</SelectItem>
              <SelectItem value='tvshows'>TV Shows</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Input placeholder='Slug' name='slug' defaultValue={movie?.slug} />

        <div className='flex flex-col lg:flex-row gap-5'>
          <Textarea
            placeholder='Mô tả phim'
            className='flex-1'
            name='content'
            defaultValue={movie?.content || ''}
          />
          <div className='flex flex-col flex-1 gap-5'>
            <Input
              placeholder='Năm sản xuất'
              name='year'
              type='number'
              defaultValue={movie?.year || ''}
            />
            <Input
              placeholder='Thumb URL'
              name='thumb_url'
              defaultValue={movie?.thumb_url || ''}
            />
            <Input
              placeholder='Poster URL'
              name='poster_url'
              defaultValue={movie?.poster_url}
            />
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-5'>
          <Input
            placeholder='Trailer URL'
            name='trailer_url'
            defaultValue={movie?.trailer_url || ''}
          />
          <Input
            placeholder='Thời gian'
            name='time'
            defaultValue={movie?.time || ''}
          />
          <Select name='status' defaultValue={movie?.status}>
            <SelectTrigger className='w-full lg:w-[300px]'>
              <SelectValue placeholder='Trạng thái' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='completed'>Hoàn Thành</SelectItem>
              <SelectItem value='ongoging'>Đang Cập Nhật</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='flex flex-col lg:flex-row gap-5'>
          <Input
            placeholder='Tập đang chiếu'
            name='episode_current'
            defaultValue={movie?.episode_current || ''}
          />
          <Input
            placeholder='Tổng số tập'
            name='episode_total'
            defaultValue={movie?.episode_total || ''}
          />
          <Select name='lang' defaultValue={movie?.lang}>
            <SelectTrigger className='w-full lg:w-[300px]'>
              <SelectValue placeholder='Ngôn ngữ' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='vietsub'>Vietsub</SelectItem>
              <SelectItem value='english'>English</SelectItem>
              <SelectItem value='thuyetminh'>thuyết minh</SelectItem>
              <SelectItem value='longtieng'>lồng tiếng</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='flex flex-col lg:flex-row gap-5'>
          <Input placeholder='Diễn viên (cách bởi dấu ,)' name='actors' />
          <Input placeholder='Đạo diễn (cách bởi dấu ,)' name='directors' />

          <Select name='chieurap' defaultValue={movie?.chieurap.toString()}>
            <SelectTrigger className='w-full lg:w-[300px]'>
              <SelectValue placeholder='Chiếu rạp' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={true.toString()}>Đang chiếu rạp</SelectItem>
              <SelectItem value={false.toString()}>Không chiếu rạp</SelectItem>
            </SelectContent>
          </Select>

          <Select name='quality' defaultValue={movie?.quality}>
            <SelectTrigger className='w-full lg:w-[300px]'>
              <SelectValue placeholder='Chất lượng' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='SD'>SD</SelectItem>
              <SelectItem value='HD'>HD</SelectItem>
              <SelectItem value='FHD'>FHD</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type='submit' variant='destructive'>
          Cập nhật
        </Button>
      </form>
    </Form>
  );
}

export default MovieForm;
