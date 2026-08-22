import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ToolTabs } from "./ToolTabs";

type Props = {
  children: ReactNode;
  showTabs?: boolean;
};

export function AppShell({ children, showTabs = true }: Props) {
  return (
    <div className="flex min-h-dvh flex-col bg-paper text-ink">
      <Header />
      {showTabs ? <ToolTabs /> : null}
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
