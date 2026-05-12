import "./styles.css";
import { PWARegister } from "./pwa-register";

export const metadata = {
  title: "Dr. Spark Academy",
  description: "Parent-supervised multi-agent summer learning program.",
  manifest: "/manifest.webmanifest",
  applicationName: "Dr. Spark Academy",
  appleWebApp: {
    capable: true,
    title: "Dr. Spark Academy",
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
