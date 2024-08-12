import AuthLayout from "./AuthLayout.tsx";
import Input from "../../ui/Input.tsx";
import {Form, Link} from "react-router-dom";
import Button from "../../ui/Button.tsx";

const Login = () => {
    return (
        <AuthLayout>
            <div
                className="w-[19.4375rem] lg:w-[28.5rem] animate-slide-up md:animate-slide-left">
                <h2 className="text-[2.4rem] mb-4 font-medium text-theme-neutral-7 capitalize">Sign in</h2>
                <div className="flex items-center gap-2 mb-8">
                    <p className="text-theme-neutral-4">Don't have an account yet?</p>
                    <Link className="text-theme-green font-medium" to={"/signup"}>Sign Up</Link>
                </div>
                <Form>
                    <div>
                        <Input
                            label={"Your username or email address"}
                            className="mb-8"
                        />
                        <Input
                            type={"password"}
                            label={"Password"}
                        />
                    </div>
                    <div className="flex items-center justify-between mt-8">
                        <div className="flex items-center">
                            <input
                                className="h-6 w-6 rounded-2 border-2 me-2 border-theme-neutral-4"
                                id="remember"
                                type="checkbox"
                            />
                            <label
                                className="text-theme-neutral-4"
                                htmlFor="remember">Remember me</label>
                        </div>
                        <Link
                            className="text-theme-neutral-7 font-semibold"
                            to={""}>Forgot password?</Link>
                    </div>
                    <Button
                        className="mt-8"
                        onClick={() => {}}
                    >Sign In</Button>
                </Form>
            </div>
        </AuthLayout>
    )
}

export default Login