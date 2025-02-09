'use client'

import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import Link from "next/link";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";


const formSchema = z
    .object({
        fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
        email: z.string().email({ message: 'Invalid email address.' }),
        password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
        confirmPassword: z.string(),
        agreeTerms: z.boolean().refine(val => val, { message: 'You must agree to the terms and conditions.' }),
    })
    .refine(data => data.password === data.confirmPassword, {
        message: 'Passwords must match.',
        path: ['confirmPassword'],
    });

export default function SignUpPage() {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            agreeTerms: false,
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        //TODO : Finish form submission
        console.log(values)
    }

    return (
        <div className="w-full">
            <h1 className="font-poppins font-medium text-[2.5rem] mb-6">Sign Up</h1>
            <div className="flex items-center gap-2">
                <p className="text-th-neutral-400">Already have an account?</p>
                <Link className="text-th-green font-semibold" href="/login">Sign In</Link>
            </div>

            <div className="mt-8">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} placeholder="Enter your full name" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} type="email" placeholder="Enter your email" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} type="password" placeholder="Enter your password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} type="password" placeholder="Confirm your password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="agreeTerms"
                            render={({ field }) => (
                                <FormItem className="flex items-center gap-2 space-y-0">
                                    <FormControl>
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                    </FormControl>
                                    <FormLabel className="text-base font-normal text-th-neutral-400">I agree to the terms and conditions</FormLabel>
                                    {/*<FormMessage className="block" />*/}
                                </FormItem>
                            )}
                        />

                        <Button className="w-full">Sign up</Button>

                    </form>
                </Form>
            </div>
        </div>
    )
}