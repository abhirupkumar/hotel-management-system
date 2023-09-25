import { SignUp } from "@clerk/clerk-react";

function SignUpPage() {

    return <div className="w-full flex sm:flex-row flex-col items-center min-h-screen justify-center">
        <div className="sm:w-1/2 mt-1 w-full">
            <img className="w-full" src="./sign-up.gif" alt="sign-up" loading="eager" />
        </div>
        <div className="flex flex-col items-center sm:w-1/2 w-full py-10 mb-5">
            <SignUp afterSignUpUrl={process.env.REACT_APP_HOST} signInUrl={process.env.REACT_APP_HOST + "/sign-in"} />
        </div>
    </div>
}

export default SignUpPage;