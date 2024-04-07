import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

function SingleMoviePage({ params }: Props) {
  return <div>Phim {params.slug}</div>;
}

export default SingleMoviePage;
