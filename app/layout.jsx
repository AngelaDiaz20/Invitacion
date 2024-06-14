import "./globals.css";
import { open_sans } from "./ui/fonts";

export const metadata = {
  title: "¡Te invitamos a nuestra boda!",
  description: "Invitación a boda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${open_sans.className} antialiased`}>{children}</body>
    </html>
  );
}