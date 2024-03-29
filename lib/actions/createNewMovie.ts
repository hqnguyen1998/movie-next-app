'use server';
import { prisma } from '@/lib/prisma';
import { slugify } from '../slugGenerate';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const newMovie = async (formData: FormData) => {
  const rawFormData = Object.fromEntries(formData);
  const data = {
    name: rawFormData.name,
    origin_name: rawFormData.origin_name,
    slug: slugify(rawFormData.name),
    thumb_url: rawFormData.thumb_url,
    poster_url: rawFormData.poster_url,
    type: rawFormData.type,
    content: rawFormData.content,
    time: rawFormData.time,
    status: rawFormData.status,
    year: Number(rawFormData.year),
    chieurap: rawFormData.chieurap === 'true' ? true : false,
    lang: rawFormData.lang,
    quality: rawFormData.quality,
  };

  await prisma.movie.create({
    data: data,
  });

  revalidatePath('/dashboard/movies');
  redirect('/dashboard/movies');
};
