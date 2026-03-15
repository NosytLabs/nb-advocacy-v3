import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Silencing Dissent | Reform NB",
  description: "How New Brunswick's establishment uses legal threats, surveillance, and institutional power to silence critics. Journalists, activists, and citizens face intimidation for speaking out.",
  keywords: ["New Brunswick censorship", "SLAPP suits", "journalist intimidation", "whistleblower", "government surveillance", "free speech NB"],
};

export default function IntimidationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
