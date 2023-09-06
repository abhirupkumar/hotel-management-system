import { SignUp } from "@clerk/clerk-react";

function SignUpPage() {
    return <div className="w-full flex items-center min-h-screen justify-center">
        <SignUp path="/sign-up" redirectUrl={process.env.REACT_APP_HOST} signInUrl="/sign-in" />;
    </div>
}

export default SignUpPage;