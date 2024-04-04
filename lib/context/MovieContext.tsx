'use client';
import { MovieCategory } from '@prisma/client';
import { createContext, useState } from 'react';

export type movieContextType = {
  movie: {
    name: string;
    origin_name: string;
    slug: string;
    thumb_url: string;
    poster_url: string;
    content: string;
    trailer_url: string;
    time: string;
    episode_current: string;
    episode_total: string;
    lang: string;
    quality: string;
    year: string;
    type: string;
    status: string;
    categories: [MovieCategory] | [];
  };
  setMovie: (movie: any) => void;
};

export const movieContextDefaultValues: movieContextType = {
  movie: {
    name: '',
    origin_name: '',
    slug: '',
    thumb_url: '',
    poster_url: '',
    content: '',
    trailer_url: '',
    time: '',
    episode_current: '',
    episode_total: '',
    lang: '',
    quality: '',
    year: '',
    type: 'single',
    status: 'completed',
    categories: [],
  },
  setMovie: () => {},
};

export const MovieContext = createContext<movieContextType>(
  movieContextDefaultValues
);

export const MovieContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentMovie, setMovie] = useState(movieContextDefaultValues.movie);
  return (
    <MovieContext.Provider value={{ movie: currentMovie, setMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
