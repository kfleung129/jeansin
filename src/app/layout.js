import NavBar from "@/components/NavBar";
import CategoryBar from "@/components/CategoryBar";
import Footer from "@/components/Footer";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { Container, Divider } from "@mui/material";
import "./globals.css";

const m_plus_rounded = M_PLUS_Rounded_1c({ subsets: ["latin"], weight: ['100', '300', '400', '500'] });

export const metadata = {
  title: "Jeansin",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={m_plus_rounded.className}>
        <NavBar/>
        <CategoryBar/>
        <Container maxWidth='lg' sx={{ mt: 2, pb: 4 }}>
          <main>{children}</main>
          <Divider sx={{ mt: 6 }}/>
          <Footer/>
        </Container>
      </body>
    </html>
  );
}
