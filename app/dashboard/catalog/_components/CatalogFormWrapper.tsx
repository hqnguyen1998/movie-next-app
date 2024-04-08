'use client';
import React, { createRef } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { AiOutlineSave } from 'react-icons/ai';
import { createCatalog } from '@/lib/actions/createCatalog';
import { useFormState } from 'react-dom';

function CatalogFormWrapper() {
  const ref = createRef<HTMLFormElement>();
  const [state, formAction] = useFormState(createCatalog, {
    ok: false,
    msg: '',
    error: { name: '' },
  });

  React.useEffect(() => {
    if (state.ok) {
      ref?.current?.reset();
    }
    if (state.msg.length > 0) {
      toast({
        title: state.msg,
        variant: state.ok ? 'success' : 'destructive',
      });
    }
  }, [state, ref]);

  return (
    <form ref={ref} action={formAction}>
      <div className='flex flex-col w-full bg-white rounded-sm shadow md:w-[800px] p-5 space-y-4 mb-5 overflow-hidden'>
        <div className='space-y-2'>
          <Label htmlFor='name'>
            Tên <span className='text-red-500'>*</span>
          </Label>
          <Input
            type='text'
            name='name'
            id='name'
            defaultValue=''
            autoComplete='off'
            className={
              state.error?.name === 'required' ? `ring-red-500 ring-2` : ''
            }
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='slug'>Đường dẫn tĩnh</Label>
          <Input type='text' name='slug' id='slug' defaultValue='' />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='per_page'>Pagination</Label>
          <Input type='number' name='per_page' id='per_page' />
          <p className='text-neutral-500 text-xs'>Item per page</p>
        </div>
        <div className='space-y-2 '>
          <Label htmlFor='value'>Value</Label>
          <Input type='text' name='value' id='value' defaultValue='' />
          <p className='break-words text-neutral-500 text-xs'>
            relation_tables,relation_field,relation_value|find_by_field_1,find_by_fiel_2,...,find_by_field_n|value_1,value_2,...,value_n|sort_by_field|sort_algo
          </p>
        </div>
        <div className='space-y-2'>
          <Label htmlFor='seo_title'>SEO Title</Label>
          <Input type='text' name='seo_title' id='seo_title' defaultValue='' />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='seo_description'>SEO Description</Label>
          <Input
            type='text'
            name='seo_description'
            id='seo_description'
            defaultValue=''
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='seo_keyword'>SEO Keyword</Label>
          <Input
            type='text'
            name='seo_keyword'
            id='seo_keyword'
            defaultValue=''
          />
        </div>
      </div>
      <Button type='submit' variant='success'>
        <span className='mr-2'>
          <AiOutlineSave />
        </span>
        Lưu và Quay lại
      </Button>
    </form>
  );
}

export default CatalogFormWrapper;
