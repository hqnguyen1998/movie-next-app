'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

function RefreshButton({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return <div onClick={() => router.refresh()}>{children}</div>;
}

export default RefreshButton;
