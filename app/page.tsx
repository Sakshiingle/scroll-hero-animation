export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gray-200 flex flex-col items-center justify-center">

      {/* ROAD STRIP */}
      <section className="relative w-full h-75 overflow-hidden">

  {/* Background Split */}
  <div className="absolute inset-0 flex">
    <div className="w-1/2 bg-green-500"></div>
    <div className="w-1/2 bg-black"></div>
  </div>

  {/* Big Text */}
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <h1 className="text-[120px] font-extrabold text-black tracking-widest">
      WELCOME ITZFIZZ
    </h1>
  </div>

  {/* Car Image */}
  <div className="absolute inset-0 flex items-center justify-center z-20">
    <img
      src="/car.png"
      alt="car"
      className="w-125"
    />
  </div>

</section>

    </main>
  );
}