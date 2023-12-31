import ImagesLogo from "./logo";
export default function ImagesBackground({ className, id }) {
  return (
    <div
      id={id}
      className={`absolute left-2/4 top-1/4 -z-10 h-screen w-screen rotate-[22deg] fill-neutral-950 opacity-10 ${className}`}
    >
      <ImagesLogo className="h-full w-full" />
    </div>
  );
}
