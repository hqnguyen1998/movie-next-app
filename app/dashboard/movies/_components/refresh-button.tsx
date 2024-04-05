'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

function RefreshButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();

  return (
    <span className={className} onClick={() => router.refresh()}>
      {children}
    </span>
  );
}

export default RefreshButton;
