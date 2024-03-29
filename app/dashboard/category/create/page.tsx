'use client';
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createCategory } from '@/lib/actions/createCategory';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { MdOutlineCancel } from 'react-icons/md';

function CreateCategoryPage() {
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const onHandleCreate = async (formData: FormData) => {
    await createCategory(formData);

    ref?.current?.reset();
  };

  return (
    <form ref={ref} action={onHandleCreate} className='w-full lg:w-[800px]'>
      <div className='bg-white rounded-sm p-5 mb-3 drop-shadow-sm'>
        <Label htmlFor='name'>Tên</Label>
        <Input
          type='text'
          id='name'
          name='name'
          placeholder='Tên thể loại'
          required
          className='mb-5 mt-2'
        />

        <Label htmlFor='slug'>Đường dẫn tĩnh</Label>
        <Input
          type='text'
          id='slug'
          name='slug'
          placeholder='Đường dẫn'
          required
          className='mb-5 mt-2'
        />
      </div>
      <div className='flex flex-row items-center gap-1'>
        <Button
          type='submit'
          variant='ghost'
          size='lg'
          className=' bg-emerald-600 text-white hover:bg-emerald-700 hover:text-white'
        >
          Lưu
        </Button>

        <Button
          type='button'
          onClick={() => router.back()}
          variant='ghost'
          className='flex gap-1 font-light'
        >
          <MdOutlineCancel /> Huỷ bỏ
        </Button>
      </div>
    </form>
  );
}

export default CreateCategoryPage;
