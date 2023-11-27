import { Inter } from "next/font/google";
import { type ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

type ClerkAuthLayoutProps = {
	children: ReactNode;
};

const ClerkAuthLayout = ({ children }: ClerkAuthLayoutProps) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main>ClerkAuthLayout{children}</main>
			</body>
		</html>
	);
};

export default ClerkAuthLayout;
