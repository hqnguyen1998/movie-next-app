'use client';
import { MovieCategory, MovieCountry } from '@prisma/client';
import { createContext, useState } from 'react';

export type movieContextType = {
  movie: {
    name: string;
    origin_name: string;
    slug: string;
    thumb_url: string;
    poster_url: string;
    content?: string;
    trailer_url?: string;
    time?: string;
    episode_current?: string;
    episode_total?: string;
    lang?: string;
    quality?: string;
    year?: string;
    type?: string;
    status?: string;
    notify?: string;
    showtimes?: string;
    chieurap?: boolean;
    sub_docquyen?: boolean;
    is_copyright?: boolean;
    is_sensitive_content?: boolean;
    is_recommended?: boolean;
    categories: [MovieCategory] | [];
    countries: [MovieCountry] | [];
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
    notify: '',
    showtimes: '',
    chieurap: false,
    sub_docquyen: false,
    is_copyright: false,
    is_sensitive_content: false,
    is_recommended: false,
    categories: [],
    countries: [],
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
