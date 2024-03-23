import { SparklesPreview } from "@/components/ui/sparklesPreview";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter";

export function Home() {
  const words = [
    {
      text: "Hey,",
      className: "text-7xl text-muted font-Hepta font-bold",
    },
    {
      text: "I'm",
      className: "text-7xl text-muted font-Hepta font-bold",
    },
    {
      text: "Rivaldo",
      className: "text-7xl text-muted font-Hepta font-bold",
    },
    {
      text: ".",
      className: "text-7xl font-Hepta font-bold text-emerald-500",
    },
  ];
  const front = [
    {
      text: "I'm",
      className: "text-2xl text-muted font-Hepta font-bold",
    },
    {
      text: "a",
      className: "text-2xl text-muted font-Hepta font-bold",
    },
    {
      text: "front-end.",
      className: "text-2xl text-emerald-500 font-Hepta font-bold",
    },
  ];
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen relative">
      <SparklesPreview>
        <div className="flex flex-col">
          <TypewriterEffectSmooth words={words} />
          <TypewriterEffectSmooth
            words={front}
            cursorClassName="xl:h-12 bg-emerald-400"
          />
        </div>
      </SparklesPreview>
    </div>
  );
}
