'use client';

import { z } from 'zod';

const loginFormSchema = z.object({
  email: z.string().email({ message: 'Email không hợp lệ!' }),
  password: z.string().min(1, { message: 'Vui lòng nhập mật khẩu!' }),
});

const registerFormSchema = z.object({
  name: z.string().min(1, { message: 'Vui lòng nhập tên của bạn!' }),
  email: z.string().email({ message: 'Email không hợp lệ!' }),
  password: z.string().min(1, { message: 'Vui lòng nhập mật khẩu!' }),
});

const movieFormSchema = z.object({
  name: z.string().min(1),
  origin_name: z.string(),
  slug: z.string(),
  content: z.string(),
  type: z.string(),
  status: z.string(),
  poster_url: z.string(),
  thumb_url: z.string(),
  chieurap: z.boolean(),
  trailer_url: z.string(),
  time: z.string(),
  episode_current: z.string(),
  episode_total: z.string(),
  quality: z.string(),
  lang: z.string(),
  showtimes: z.string(),
  year: z.number(),
  actors: z.string(),
  directors: z.string(),
  category: z.array(z.string()),
});

export { loginFormSchema, registerFormSchema, movieFormSchema };
