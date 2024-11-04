import DataItem from "@/componenets/DataItem";
import localFont from "next/font/local";

const Bebas = localFont({
  src: "./fonts/BebasNeue-Regular.ttf",
  weight: "100 900",
});

export default async function Home() {
  const data = await fetch("http://localhost:3000/api/movies", {
    cache: "no-store",
  });
  const movies = await data.json();

  console.log(movies.allMovies);
  return (
    <div className="flex flex-col w-screen h-screen p-10">
      <div className="flex flex-row gap-20 items-center mb-2">
        <h1 className={"text-4xl text-red-500 " + Bebas.className}>
          Movies4You
        </h1>
        <form>
          <div className="flex flex-row gap-2">
            <input
              name="searchbar"
              placeholder="Search for movie"
              className="w-auto border-[1px] border-red-500 rounded-xl p-2 outline-none"
            />
            <button className="bg-gray-800 p-3 rounded-full text-white focus:opacity-65 active:opacity-50">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="p-5 w-full h-full bg-red-200 rounded-xl">
        <DataItem items={movies.allMovies} />
      </div>
    </div>
  );
}
