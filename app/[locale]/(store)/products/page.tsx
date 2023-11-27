import { UserButton } from "@clerk/nextjs";

type Props = {};

const ProductsPage = (props: Props) => {
	return (
		<div>
			ProductsPage
			<UserButton afterSignOutUrl="/" />
		</div>
	);
};

export default ProductsPage;
