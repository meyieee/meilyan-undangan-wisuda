export default function PearlCorner({ className }) {
  return (
    <div
      className={`absolute w-3 h-3 rounded-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(0,0,0,0.1)] ${className}`}
    />
  );
}
