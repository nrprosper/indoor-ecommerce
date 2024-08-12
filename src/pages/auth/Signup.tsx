import AuthLayout from "./AuthLayout.tsx";
import {Form, Link} from "react-router-dom";
import Input from "../../ui/Input.tsx";
import Button from "../../ui/Button.tsx";


const Signup = () => {
    return (
        <AuthLayout>
            <div
                className="w-[19.4375rem] lg:w-[28.5rem] animate-slide-up md:animate-slide-left">
                <h2 className="text-[2.4rem] mb-4 font-medium text-theme-neutral-7 capitalize">Sign up</h2>
                <div className="flex items-center gap-2 mb-8">
                    <p className="text-theme-neutral-4">Already have an account?</p>
                    <Link className="text-theme-green font-medium" to={"/login"}>Sign in</Link>
                </div>
                <Form>
                    <div>
                        <Input
                            label={"Your name"}
                            className="mb-8"
                        />
                        <Input
                            label={"Username"}
                            className="mb-8"
                        />
                        <Input
                            type={"email"}
                            label={"Email"}
                            className="mb-8"
                        />
                        <Input
                            type={"password"}
                            label={"Password"}
                        />
                    </div>
                    <div className="mt-8 flex items-center">
                        <input
                            className="h-6 w-6 rounded-2 border-2 me-2 border-theme-neutral-4"
                            id="agree"
                            type="checkbox"
                        />
                        <label
                            className="text-theme-neutral-4"
                            htmlFor="agree">I agree with
                            <span className="text-theme-neutral-7 font-semibold"> Privacy Policy </span>
                            and <span className="text-theme-neutral-7 font-semibold">Terms of Use </span></label>
                    </div>
                    <Button
                        className="mt-8"
                        onClick={() => {}}
                    >Sign Up</Button>
                </Form>
            </div>
        </AuthLayout>
    )
}


export default Signup;