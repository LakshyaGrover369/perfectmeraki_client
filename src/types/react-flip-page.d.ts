// src/types/react-flip-page.d.ts
declare module "react-flip-page" {
  import React from "react";

  interface FlipPageProps {
    orientation?: "horizontal" | "vertical";
    responsive?: boolean;
    animationDuration?: number;
    pageBackground?: string;
    uncutPages?: boolean;
    height: number | string;
    width: number | string;
    style?: React.CSSProperties;
    children: React.ReactNode;
  }

  const FlipPage: React.FC<FlipPageProps>;
  export default FlipPage;
}
