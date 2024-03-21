import React from "react";
import { notFound } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Movie } from "@prisma/client";
import Image from "next/image";

async function MovieLists() {
  const response = await fetch(`http://localhost:3000/api/movie`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!response.ok) {
    return notFound();
  }

  const { movies }: { movies: [Movie] } = await response.json();

  return (
    <div className="h-fit whitespace-nowrap overflow-x-auto relative">
      <Table className="bg-slate-900 ">
        <TableHeader className="text-center">
          <TableRow className="hover:bg-slate-800">
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Original Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Poster</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Quality</TableHead>
            <TableHead>Year</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {movies?.map((movie) => (
            <TableRow key={movie.id} className="hover:bg-slate-800">
              <TableCell>{movie.id}</TableCell>
              <TableCell>{movie.name}</TableCell>
              <TableCell>{movie.origin_name}</TableCell>
              <TableCell>{movie.type}</TableCell>
              <TableCell>
                {movie.status === "completed" ? "Hoàn thành" : "Đang cập nhật"}
              </TableCell>
              <TableCell>
                <Image
                  src={movie?.thumb_url || ""}
                  width={50}
                  height={50}
                  alt={movie.name}
                  priority
                />
              </TableCell>
              <TableCell>{movie.time}</TableCell>
              <TableCell>{movie.quality}</TableCell>
              <TableCell>{movie.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default MovieLists;
