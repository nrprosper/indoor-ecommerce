'use client'

import Link from "next/link";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { Checkbox } from '@/components/ui/checkbox';

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8,  {
        message: 'Password must be at least 8 characters.'
    }),
    rememberMe: z.boolean().optional(),
})

export default function LoginPage() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            password: '',
            rememberMe: false,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        //TODO : Finish form submission
        console.log(values)
    }

    return(
        <div className="w-full">
            <h1 className="font-poppins font-medium text-[2.5rem] mb-6">Sign In</h1>
            <div className="flex items-center gap-2">
                <p className="text-th-neutral-400">Don’t have an account yet?</p>
                <Link className="text-th-green font-semibold" href="/sign-up">Sign Up</Link>
            </div>

            <div className="mt-8">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} placeholder="Enter your username or email address"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} type="password" placeholder="Enter your password"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <div className="flex items-center justify-between">
                            <FormField
                                control={form.control}
                                name="rememberMe"
                                render={({ field }) => (
                                    <FormItem className="flex items-center gap-2 space-y-0">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <FormLabel className="text-base font-normal text-th-neutral-400">Remember me</FormLabel>
                                    </FormItem>
                                )}
                            />

                            <Link
                                href=""
                                className="font-semibold text-th-neutral-700"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        <Button className="w-full">Sign in</Button>

                    </form>
                </Form>
            </div>
        </div>
    )
}