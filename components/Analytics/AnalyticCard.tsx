import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
  title: string;
  total?: number;
  icon?: React.ReactNode;
};

function AnalyticCard({ title, total, icon }: Props) {
  return (
    <Card className='flex-1 bg-slate-900 border-none text-white drop-shadow-sm shadow'>
      <CardHeader>
        <CardTitle className='text-gray-200 font-light text-sm'>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-row items-center justify-between'>
        <p className='text-3xl'>{total}</p>
        {icon}
      </CardContent>
    </Card>
  );
}

export default AnalyticCard;
