import Blobs from "@/components/blobs";

export default function Home() {
  return (
    <main className="relative h-screen p-12 md:p-24 w-screen overflow-hidden">
      <Blobs />
      <p>By Victor Ogunjobi</p>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl md:text-8xl text-[#ffd700] font-bold text-center">
          AMPTRACK
        </h1>
        <p className="text-lg md:text-xl mt-8 text-center">
          Real-time insights into energy usage for optimized and cost saving
          consumption
        </p>

        <a
          rel="noreferrer"
          href="mailto:victor.ogunjobi@torontomu.ca"
          className="block text-center text-sky-400 mt-4"
        >
          Send me an email - victor.ogunjobi@torontomu.ca
        </a>
      </div>
    </main>
  );
}
