"use client";

import { ThemeProvider } from "@gravity-ui/uikit";
import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }}>
      <ThemeProvider theme="dark">{children}</ThemeProvider>
    </ReactLenis>
  );
}
