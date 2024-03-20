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

export { loginFormSchema, registerFormSchema };
