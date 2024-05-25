import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-5xl font-bold text-center text-white">Ayuvya Ayurveda</h1>
      <h2 className="text-xl text-center text-white">Internship Assignment</h2>
      <p className="text-center text-white">(Click on the button below for Demo)</p>
      <Link
        href={"/review"}
        className="py-4 w-72 lg:w-96 text-center bg-white text-zinc-900  font-bold shadow-md hover:shadow-white transition-all ease-in"
      >
        Write a Review
      </Link>
    </>
  );
}
