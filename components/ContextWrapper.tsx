'use client';
import React from 'react';
import {
  MovieContext,
  movieContextDefaultValues,
} from '@/lib/context/MovieContext';

type Props = {
  children: React.ReactNode;
};

function ContextWrapper({ children }: Props) {
  return (
    <MovieContext.Provider value={movieContextDefaultValues}>
      {children}
    </MovieContext.Provider>
  );
}

export default ContextWrapper;
