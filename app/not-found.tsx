import Link from 'next/link';
import React from 'react';

function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-semibold m-5'>404 Page Not Found...</h1>
      <Link href='/' className='underline text-red-700'>
        Go back the Home Page!
      </Link>
    </div>
  );
}

export default NotFound;
