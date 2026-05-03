import "./styles.css";
import { PWARegister } from "./pwa-register";

export const metadata = {
  title: "learning-squad.ai",
  description: "Parent-supervised multi-agent summer learning program.",
  manifest: "/manifest.webmanifest",
  applicationName: "learning-squad.ai",
  appleWebApp: {
    capable: true,
    title: "Learning Squad",
    statusBarStyle: "default"
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg"
  }
};

export const viewport = {
  themeColor: "#167c80"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <PWARegister />
        {children}
      </body>
    </html>
  );
}
