import { ReactNode } from "react";
import { SparklesCore } from "../ui/sparkles";

export function SparklesPreview({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
      <div className="absolute z-20">{children}</div>
    </div>
  );
}
