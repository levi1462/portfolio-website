import "./global.css";
import { ThemeProvider } from "./contexts/ThemeContexts";
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
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
