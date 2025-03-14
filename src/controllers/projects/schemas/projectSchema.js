import z from 'zod'

const projectSchema = z.object({
    name: z.string().min(5).max(50),
    description: z.string().min(10).max(255),
    stack: z.object({
        frontend: z.string().min(3).max(20),
        backend: z.string().min(3).max(20),
        database: z.string().min(3).max(20),
    }),
    link: z.string().url(),
    img_url: z.string().url()
})

export default projectSchema;