'use server';
import { prisma } from '@/lib/prisma';

type FormInputType = {
  ok: boolean;
  msg: string;
  error?: { name: string };
};

export const createCatalog = async (
  previousState: FormInputType,
  formdata: FormData
) => {
  const name = formdata.get('name') as string;
  const slug = formdata.get('slug') as string;
  const per_page = formdata.get('per_page') as string;
  const value = formdata.get('value') as string;
  const seo_title = formdata.get('seo_title') as string;
  const seo_description = formdata.get('seo_description') as string;
  const seo_keyword = formdata.get('seo_keyword') as string;

  if (name.length < 1) {
    return {
      ok: false,
      msg: 'Vui lòng nhập tên catalog!',
      error: { name: 'required' },
    };
  }

  try {
    await prisma.movieCatalog.create({
      data: {
        name,
        slug,
        per_page: Number(per_page),
        value,
        seo_title,
        seo_description,
        seo_keyword,
      },
    });

    return {
      ok: true,
      msg: 'Thành công tạo catalog mới.',
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      msg: 'Lỗi vui lòng kiểm tra lại.',
    };
  }
};
