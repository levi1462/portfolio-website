import "./global.css";
export const metadata = {
  title: "Portfolio",
  description: "Levi Mickelsoson portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
