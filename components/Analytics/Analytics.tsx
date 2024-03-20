import React from 'react';
import AnalyticCard from './AnalyticCard';
import { SiGoogleanalytics } from 'react-icons/si';
import { FaFilm } from 'react-icons/fa6';
import { FaCommentAlt, FaStar } from 'react-icons/fa';

function Analytics() {
  return (
    <div className='w-full flex flex-col flex-wrap gap-5 p-5 md:flex-row'>
      <AnalyticCard
        title='Traffics / Views'
        total={23013}
        icon={<SiGoogleanalytics className='w-7 h-7 text-red-400' />}
      />

      <AnalyticCard
        title='Total Movies'
        total={2313}
        icon={<FaFilm className='w-7 h-7 text-red-400' />}
      />

      <AnalyticCard
        title='Total Comments'
        total={32}
        icon={<FaCommentAlt className='w-7 h-7 text-red-400' />}
      />

      <AnalyticCard
        title='New Visitors'
        total={12}
        icon={<FaStar className='w-7 h-7 text-red-400' />}
      />
    </div>
  );
}

export default Analytics;
