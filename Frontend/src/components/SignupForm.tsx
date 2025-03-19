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
} from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from './ui/button'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { setUser } from '@/store/userSlice'

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be atleast 8 characters"),
  batch: z.string().min(3, "Invalid year").startsWith("20", "Invalid year"),
  role: z.enum(['student', 'alumni'], {
    required_error: "Please select a role"
  }),
  linkedin: z.string().includes("linkedin.com", { message: "Enter valid LinkedIn address" }),
  github: z.string().includes("github.com", { message: "Enter valid Github address" }),
  dob: z.string().min(10, "Enter a valid date")
})

// dob: z.date().refine((date) => date < new Date(), {
//   message: "Date of birth cannot be in the future"
// })

export const SignupForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { setUser } = useSelector((state: RootState) => state.user);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      batch: "",
      role: undefined,
      linkedin: "",
      github: "",
      dob: ""
    }
  });

  const submitForm = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      const response = await axios.post("http://localhost:3000/api/signup", values, { withCredentials: true });
      const accessToken = response.data.data.accessToken;
      const refreshToken = response.data.data.refreshToken;
      const user = response.data.data.user;

      dispatch(setUser(user));

      if (!accessToken || !refreshToken){
        throw new Error("Error while signing up");
      }

      // Store the tokens for authorization purposes
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // Navigate the user to the dashboard/home page
      navigate("/home");

    }
    catch(error){
      console.error("SIGNUP_ERROR", error);
    }
  }

  return (
    <div className='flex flex-col gap-6 mt-10 mr-[-2rem]'>
    
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)} className='flex flex-col gap-6'>

        <div className='space-y-2'>
          <h2 className='text-3xl font-semibold'>Welcome!</h2>
          <p className='text-sm'>Please enter your details here</p>
        </div>

        <div className='space-y-6 grid grid-cols-2 gap-x-8'>
        <FormField
          control={form.control}
          name='firstName'
          render={({field}) => (
            <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                    <Input className='rounded-sm w-56' type='text' placeholder='Enter First Name' {...field}/>
                </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='lastName'
          render={({field}) => (
            <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                    <Input className='rounded-sm w-56' type='text' placeholder='Enter Last Name' {...field}/>
                </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({field}) => (
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input className='rounded-sm w-56' type='text' placeholder='Enter your Email' {...field}/>
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
                    <Input className='rounded-sm w-56' type='password' placeholder='Enter your Password' {...field}/>
                </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='batch'
          render={({field}) => (
            <FormItem>
                <FormLabel>Batch</FormLabel>
                <FormControl>
                    <Input className='rounded-sm w-56' placeholder='20XX' type='text' {...field}/>
                </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='role'
          render={({field}) => (
            <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder='Select a role'/>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='student'>Student</SelectItem>
                        <SelectItem value='alumni'>Alumni</SelectItem>
                      </SelectContent>
                    </Select>
                </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='dob'
          render={({field}) => (
            <FormItem>
                <FormLabel>dob</FormLabel>
                <FormControl>
                  <Input type='text' className='w-56' placeholder='DD/MM/YYYY' {...field}/>
                </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='linkedin'
          render={({field}) => (
            <FormItem>
                <FormLabel>LinkedIn</FormLabel>
                <FormControl>
                    <Input className='rounded-sm w-56' type='text' placeholder='Enter LinkedIn profile' {...field}/>
                </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='github'
          render={({field}) => (
            <FormItem>
                <FormLabel>Github</FormLabel>
                <FormControl>
                    <Input className='rounded-sm w-56' type='text' placeholder='Enter Github profile' {...field}/>
                </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />
        </div>

        <Button className='text-black hover:bg-gray-300 cursor-pointer bg-white' type='submit'>Sign up</Button>

      </form>
    </Form>
    </div>
  )
}
