import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url(/salad.jpg)] bg-cover bg-center h-full">
      <div className="flex flex-col items-end justify-center h-full px-16 gap-6 max-md:items-center">
        <div className="flex flex-col items-center justify-center gap-6 ">
          <h1 className="text-white font-semibold text-5xl text-center">
            Welcome to recipe app
          </h1>
          <Link href="/recipe-list" className="mx-auto">
            <button className="px-4 py-2 bg-white rounded-md">
              Explore Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
