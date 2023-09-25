import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {

    return (
        <div className="w-full flex sm:flex-row flex-col items-center min-h-screen justify-center">
            <div className="sm:w-1/2 mt-1 w-full">
                <img className="w-full" src="./sign-in.gif" alt="sign-in" loading="eager" />
            </div>
            <div className="flex flex-col items-center sm:w-1/2 w-full py-10 mb-5">
                <SignIn afterSignInUrl={process.env.REACT_APP_HOST} signUpUrl={process.env.REACT_APP_HOST + "/sign-up"} />
            </div>
        </div>
    );
};
export default SignInPage;