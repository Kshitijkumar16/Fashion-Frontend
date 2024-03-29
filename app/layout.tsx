import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ModalProvider from "@/providers/ModalProvider";
import ToastProvider from "@/providers/ToastProvider";

const urbanist = Urbanist({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	style: ["normal"],
});

export const metadata: Metadata = {
	title: "urbn. | Latest trending clothes and accessories",
	description:
		"Get a look at the latest trendy catalogue of eye-catching fashion.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={urbanist.className}>
				<ModalProvider />
				<ToastProvider />
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
