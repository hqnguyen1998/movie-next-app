'use client';
import React from 'react';
import { z } from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema } from '@/lib/formSchema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

function SignInPage() {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = async (data: { email: string; password: string }) => {
    const response = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (response?.error) {
      toast({
        title: 'Đăng nhập thất bại!',
        variant: 'destructive',
      });
    }

    router.push('/');
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className='space-y-8 w-full text-white'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder='johndoe123@gmail.com'
                  type='email'
                  autoComplete='off'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='*****' type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full bg-red-400'>
          Sign In
        </Button>
      </form>

      <div className='mt-5'>
        <p className='text-gray-400 text-sm'>
          Bạn chưa đăng ký tài khoản?{' '}
          <Link href='/auth/register' className='text-red-600'>
            Đăng ký ngay!
          </Link>
        </p>
      </div>
    </Form>
  );
}

export default SignInPage;
