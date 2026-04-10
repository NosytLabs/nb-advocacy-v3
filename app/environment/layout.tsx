import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Environmental Devastation",
  description: "How industrial clearcutting, glyphosate spraying, and NB Power's fossil fuel addiction are destroying New Brunswick's environment. Salmon collapse, toxic emissions, and Irving's grip on public forests.",
  keywords: ["New Brunswick environment", "glyphosate spraying", "NB Power emissions", "Miramichi salmon", "Irving forestry", "clearcutting"],
};

export default function EnvironmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
