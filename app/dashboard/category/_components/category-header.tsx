import React, { ReactNode, memo } from 'react';

type Prop = {
  title: string;
  children: ReactNode;
};

function CategoryHeader({ title, children }: Prop) {
  return (
    <div className='flex flex-row items-baseline p-5'>
      <h1 className='text-3xl mr-2'>{title}</h1>
      <div className='flex flex-row items-center'>{children}</div>
    </div>
  );
}

export default memo(CategoryHeader);
