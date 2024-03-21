import React from "react";

type Props = {
  children: React.ReactNode;
  movieLists: React.ReactNode;
};

function MovieLayout({ children, movieLists }: Props) {
  return <div className="p-5">{movieLists}</div>;
}

export default MovieLayout;
