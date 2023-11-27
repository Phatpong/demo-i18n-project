import { type ReactNode } from "react";

type StoreLayoutProps = {
	children: ReactNode;
};

const StoreLayout = ({ children }: StoreLayoutProps) => {
	return <div>{children}</div>;
};

export default StoreLayout;
