import "./styles.css";

export const metadata = {
  title: "learning-squad.ai",
  description: "Parent-supervised multi-agent summer learning program."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

