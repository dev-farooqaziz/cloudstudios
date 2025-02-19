// Import Fonts
import { primary } from "./configs/fonts";
// Import Components
import ConditionalLayout from "./ConditionalLayout";
// Import Css
import "./global.css";
//===== Meta Data =====
export const metadata = {
  metadataBase: new URL("https://cloudstudiosinc.com/"),
  //===== Meta Tags =====
  title: "Cloud Studios Inc: Cutting-Edge Video Animation Studio in USA.",
  description:
    "Cloud Studios Inc. delivers innovative animation, video production, and VFX solutions. From cel animation, hybrid animation, 3d visualization, and AR/VR augmentation to real-time rendering – we are the 'destination' for your brand's success",
  //===== OG Tags =====
  openGraph: {
    title: "Cloud Studios Inc: Cutting-Edge Video Animation Studio in USA.",
    description:
      "Cloud Studios Inc. delivers innovative animation, video production, and VFX solutions. From cel animation, hybrid animation, 3d visualization, and AR/VR augmentation to real-time rendering – we are the 'destination' for your brand's success",
    url: "/",
    siteName: "Cloud Studios Inc",
    locale: "en_US",
    type: "website",
    images: "/public/images/icons/footerlogo.webp",
  },
  //===== Canonical =====
  alternates: { canonical: "/" },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
    nocache: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  //===== GEO Tags =====
  other: {},
  //===== Google Varification =====
  verification: {
    other: {
      "": [""],
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${primary.variable}`}>
        <ConditionalLayout>
          <main>{children}</main>
        </ConditionalLayout>
      </body>
    </html>
  );
}
