import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => (
    <div className="w-full flex items-center min-h-screen justify-center">
        <SignIn path="/sign-in" redirectUrl={process.env.REACT_APP_HOST} signUpUrl="/sign-up" />
    </div>
);
export default SignInPage;