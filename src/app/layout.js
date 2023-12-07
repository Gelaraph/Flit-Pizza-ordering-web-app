import { Inter } from "next/font/google";
import "./globals.css";
import { FormProvider } from "@/formContext/FormContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pizzon Pizza",
  description: "Pizzon Pizza Delivery App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}
