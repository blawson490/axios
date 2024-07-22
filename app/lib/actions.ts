import { revalidatePath } from 'next/cache';
import { users, userPasswords } from './placeholder-data';
import { redirect } from 'next/navigation';
import { z } from 'zod'

const LoginFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email' }),
    password: z.string().min(1, { message: 'Please enter a valid password' }),
})

const ValidateUser = LoginFormSchema.omit({})

export async function validateUser(formData: FormData) {
    // Log the incoming formData
    console.log('formData:', Array.from(formData.entries()));

    // Parse and validate the formData using Zod
    try {
        const { email, password } = ValidateUser.parse({
            email: formData.get('email'),
            password: formData.get('password'),
        });

        console.log('Parsed email:', email);
        console.log('Parsed password:', password);

        const user = users.find(user => user.userPrincipalName === email);
        if (!user) {
            return { message: 'Invalid username or password.' };
        }

        const userPassword = userPasswords.find(up => up.userId === user.userId);
        if (!userPassword || userPassword.password !== password) {
            return { message: 'Invalid username or password.' };
        }

    } catch (error) {
        console.error('Validation or Authentication Error:', error);
        return { message: error instanceof z.ZodError ? error.errors : 'Failed to authenticate user.' };
    }
    
    // TODO: Implement once next auth is implemented
    // revalidatePath('/dashboard/dashboard');
    redirect('/dashboard/dashboard/');
}

export async function signout() {
    redirect('/login');
}