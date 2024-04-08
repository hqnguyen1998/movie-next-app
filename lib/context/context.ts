import { useContext } from 'react';

import { MovieContext } from './MovieContext';
import { SideMenuContext } from './SideMenuContext';

export const useMovieContext = () => useContext(MovieContext);
export const useSideMenuContext = () => useContext(SideMenuContext);
