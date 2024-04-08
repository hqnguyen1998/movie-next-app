import React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

// Icons
import { IoPlayCircleOutline, IoHomeOutline } from 'react-icons/io5';
import { MdSettings, MdOutlineCategory } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { CiBoxList } from 'react-icons/ci';
import { AiOutlineGlobal } from 'react-icons/ai';
import { GrCatalogOption } from 'react-icons/gr';
import DropDownMenu from './DropDownMenu';

let menus = [
  {
    title: 'Bảng điều khiển',
    link: '/dashboard',
    icon: <IoHomeOutline className='mr-2 h-5 w-5' />,
  },
  {
    title: 'Quản lý phim',
    link: '/dashboard/movies',
    icon: <IoPlayCircleOutline className='mr-2 h-5 w-5' />,
  },
  {
    title: 'Phân loại',
    link: '',
    icon: <CiBoxList className='mr-2 h-5 w-5' />,
    subMenu: {
      isOpen: false,
      data: [
        {
          title: 'Danh sách',
          link: '/dashboard/catalog',
          icon: <GrCatalogOption className='mr-2 h-5 w-5' />,
        },
        {
          title: 'Thể loại',
          link: '/dashboard/category',
          icon: <MdOutlineCategory className='mr-2 h-5 w-5' />,
        },
        {
          title: 'Quốc gia',
          link: '/dashboard/country',
          icon: <AiOutlineGlobal className='mr-2 h-5 w-5' />,
        },
      ],
    },
  },
  {
    title: 'Quản lý thành viên',
    link: '/dashboard/users',
    icon: <FaRegUser className='mr-2 h-5 w-5' />,
  },
  {
    title: 'Cài đặt',
    link: '/dashboard/settings',
    icon: <MdSettings className='mr-2 h-5 w-5' />,
  },
];

function SideBar() {
  return (
    <aside
      className={cn(
        'w-0 lg:w-[225px] h-[calc(100vh-67px)] transition-all ease-in-out duration-300'
      )}
    >
      <Separator />

      <DropDownMenu menus={menus} />
    </aside>
  );
}

export default SideBar;
