import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://luna-residences-bali.site"),
  title: "Luna Residences Bali | Résidences d’exception à Nuanu",
  description: "15 résidences avec vues océan, rivière et jungle à Nuanu Creative City. À partir de 185 000 $, gestion 5 étoiles et intérieurs YODEZEEN.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Luna Residences — Là où la rivière rencontre l’océan",
    description: "15 résidences d’exception à Nuanu, Bali. À partir de 185 000 $.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Luna Residences à Nuanu, Bali" }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
