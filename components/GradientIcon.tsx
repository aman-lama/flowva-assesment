import { ReactNode } from "react";

export default function GradientIcon({
  children,
  gradient,
}: {
  children: ReactNode;
  gradient: string;
}) {
  return (
    <div
      className="flex h-42 w-42 items-center justify-center rounded-full shadow-lg"
      style={{
        background: gradient,
      }}
    >
      
        {children}
  
    </div>
  );
}
