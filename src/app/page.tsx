import Gauge from "@/components/atoms/Gauge";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-4">
      <Gauge value={50} max={100} visual="blue" />
    </div>
  );
}
