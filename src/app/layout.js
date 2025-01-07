import { Montserrat } from "next/font/google";
import "./globals.css";

// Import the Montserrat font with your preferred weights
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"], // You can specify the weights you need
});

export const metadata = {
  title: "Evan Howell Developer Portfolio",
  description: "Evan Howell is a software developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
