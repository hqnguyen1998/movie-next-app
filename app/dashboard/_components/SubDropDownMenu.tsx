import React from 'react';
import Link from 'next/link';
import { SubMenuType } from '@/types/types';

function SubDropDownMenu({
  data,
  pathname,
}: {
  data: SubMenuType;
  pathname: string;
}) {
  return (
    <ul key={data.title} className='px-[40px] flex flex-col gap-1'>
      <li key={data.title} className='w-full'>
        <Link
          href={data.link}
          className={`${
            data.link === pathname && 'bg-gray-50 text-red-500'
          } flex flex-row p-2 hover:bg-gray-50 hover:text-red-500`}
        >
          {data.icon} {data.title}
        </Link>
      </li>
    </ul>
  );
}

export default SubDropDownMenu;
