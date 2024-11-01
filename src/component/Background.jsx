

export default function Background() {
  return (
    <div className="w-full h-screen fixed z-[2]">
      <div className="w-full py-5 flex justify-center text-zinc-600 font-semibold text-xl">
        Documents.
      </div>

      <h1 className="text-[12vw] tracking-tighter absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] leading-none font-semibold text-zinc-700">
        Doc Card
      </h1>
    </div>
  );
}
