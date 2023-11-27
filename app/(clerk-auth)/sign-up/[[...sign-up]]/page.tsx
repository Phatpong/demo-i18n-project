import { SignUp } from "@clerk/nextjs";

type ClerkSignUpPageProps = {};

const ClerkSignUpPage = ({}: ClerkSignUpPageProps) => {
	return (
		<div>
			<SignUp />
		</div>
	);
};

export default ClerkSignUpPage;
