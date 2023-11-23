import Blobs from "@/components/blobs";

export default function Home() {
  return (
    <main className="relative h-screen p-24 w-screen overflow-hidden">
      <Blobs />
      <p>By Victor Ogunjobi</p>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-8xl text-[#ffd700] font-bold text-center">
          AMPTRACK
        </h1>
        <p className="text-xl mt-8 text-center">
          Real-time insights into energy usage for optimized and cost saving
          consumption
        </p>
      </div>
    </main>
  );
}
