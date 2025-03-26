import z from 'zod'

export const UserSchema = z.object({
    id:z.string().uuid(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email()
})

export type User = z.infer<typeof UserSchema>
