"use client"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from './ui/input'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from './ui/form'
import { Button } from './ui/button'
import { useNavigate } from 'react-router'
import axios from 'axios'

const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be atleast 8 characters")
});

export const LoginForm = () => {

    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    const submitForm = async (values: z.infer<typeof formSchema>) => {
        console.log(values);

        const response = await axios.post("http://localhost:3000/api/login", values);
        const accessToken = response.data.data.accessToken;
        const refreshToken = response.data.data.refreshToken;

        if (!accessToken || !refreshToken){
            throw new Error("Error while signing up");
        }

        // Store the tokens for authorization purposes
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        // Navigate the user to the dashboard/home page
        navigate("/dashboard");
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(submitForm)} className='space-y-12 px-6 py-6'>
            <div className='space-y-2'>
                <h2 className='text-3xl font-semibold'>Welcome Back!</h2>
                <p className='text-sm'>Please enter your details here</p>
            </div>
            <FormField
                control={form.control}
                name='email'
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input className='rounded-sm w-xs' type='text' placeholder='Enter your Email' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name='password'
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input className='rounded-sm' type='password' placeholder='Enter your password' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <Button type='submit' className='rounded-sm hover:bg-gray-300 cursor-pointer bg-white text-black w-full'>Login</Button>

        </form>
    </Form>
  )
}
