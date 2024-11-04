import React from "react";

interface Props {
  items: {
    id: string;
    name: string;
    cast: string[];
    director: string;
    genres: string[];
  }[];
}

export default function DataItem({ items }: Props) {
  return (
    <>
      <div className="moviesContainer">
        {items.map((item) => (
          <div key={item.id} className="movieContainer">
            <p>{item.name}</p>
            <p>{item.director}</p>
            <p>{item.cast}</p>
            <p>{item.genres}</p>
          </div>
        ))}
      </div>
    </>
  );
}
