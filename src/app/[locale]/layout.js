import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import OurServiceModalProvider from "@/context/OurServiceModalProvider";
import { ChakraProvider } from "@/providers/ChakraProvider";

import { Container } from "@chakra-ui/react";

import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true}>
        <ChakraProvider>
          <OurServiceModalProvider>
            <Header />
            <main className={"main"}>
              <Container maxW={"1400px"}>{children}</Container>
            </main>
            <Footer />
          </OurServiceModalProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
