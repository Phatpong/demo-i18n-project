import { SignIn } from "@clerk/nextjs";

type ClerkSignInPageProps = {};

const ClerkSignInPage = ({}: ClerkSignInPageProps) => {
	return (
		<div>
			<SignIn />
		</div>
	);
};

export default ClerkSignInPage;
