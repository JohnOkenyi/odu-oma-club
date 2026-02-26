import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
    title: "Homely Health Care | Expert Home Care in Bournemouth",
    description:
        "Homely Health Care provides expert, compassionate home care, live-in care, supported living, and complex nursing care across Bournemouth and surrounding areas. CQC regulated.",
    keywords:
        "home care Bournemouth, live-in care, supported living, dementia care, complex care, nursing support, Homely Health Care",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
