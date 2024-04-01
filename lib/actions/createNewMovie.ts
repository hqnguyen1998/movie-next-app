'use server';
import { prisma } from '@/lib/prisma';
import { slugify } from '../slugGenerate';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {
  MovieLang,
  MovieQuality,
  MovieStatus,
  MovieType,
} from '@prisma/client';

export const newMovie = async (formData: FormData) => {
  const rawFormData = Object.fromEntries(formData.entries());

  await prisma.movie.create({
    data: {
      name: rawFormData.name.toString(),
      origin_name: rawFormData.origin_name.toString(),
      slug: rawFormData.slug.toString(),
      poster_url: rawFormData.poster_url.toString(),
      thumb_url: rawFormData.thumb_url.toString(),
      content: rawFormData?.content?.toString(),
      status:
        rawFormData.status === 'ongoing'
          ? MovieStatus['ongoing']
          : MovieStatus['completed'],
      chieurap: Boolean(rawFormData.chieurap),
      year: Number(rawFormData.year),
      trailer_url: rawFormData.trailer_url.toString(),
      time: rawFormData.time.toString(),
      episode_current: rawFormData.episode_current.toString(),
      episode_total: rawFormData.episode_total.toString(),
      lang:
        rawFormData.lang === 'vietsub'
          ? MovieLang['vietsub']
          : rawFormData.lang === 'english'
          ? MovieLang['english']
          : rawFormData.lang === 'thuyetminh'
          ? MovieLang['thuyetminh']
          : MovieLang['longtieng'],
      quality:
        rawFormData.quality === 'SD'
          ? MovieQuality['SD']
          : rawFormData.quality === 'HD'
          ? MovieQuality['HD']
          : MovieQuality['FHD'],
      type:
        rawFormData.type === 'single'
          ? MovieType['single']
          : rawFormData.type === 'series'
          ? MovieType['series']
          : rawFormData.type === 'hoathinh'
          ? MovieType['hoathinh']
          : MovieType['tvshows'],
    },
  });

  revalidatePath('/dashboard/movies');
  redirect('/dashboard/movies');
};
