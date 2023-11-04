// src/components/Contact.tsx
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'

type FormInputs = {
    subject: string,
    email: string,
    message: string
}

function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()

    const onSubmit: SubmitHandler<FormInputs> = data => {
        emailjs.send(
            'service_Infini@18.12',
            'template_Infini@18.12',
            {
                subject: data.subject,
                email: data.email,
                message: data.message   
            },
            'jfeuIcI1-EVjqg0Dy'
            
        )
    }

    return (
        <div className='h-screen dark:bg-gray-900'>
            <div className='flex justify-center flex-col items-center'>
                <div className='h-[120px] border-r-[1px] mt-[90px]' />
                <div className='w-[5px] h-[5px] bg-yellow-300 rounded-full'></div>
                <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                    <label className='block mt-4 p-1 font-medium text-gray-900 dark:text-yellow-300' htmlFor="subject">Objet du mail</label>
                    <input {...register("subject")} className='border mt-1 text-gray-900 dark:text-gray-300 dark:bg-gray-800 border-yellow-300 rounded-lg p-1 px-[12px]' type="text" name="subject" id="subject"
                        placeholder="Quel est l'objet du mail ?" />

                    <label className='block mt-2 p-1 font-medium text-gray-900 dark:text-yellow-300' htmlFor="email">Email</label>
                    <input {...register("email", {required : true})} className='border mt-1 text-gray-900 dark:text-gray-300 dark:bg-gray-800 border-yellow-300 rounded-lg p-1 px-[12px]' type="email" name="email" id="email"
                        placeholder="Votre email" />
                    {errors.email && <p className='text-red-500 p-1'>Email requis !</p>}

                    <label className='block mt-2 p-1 font-medium text-gray-900 dark:text-yellow-300' htmlFor="message">Message</label>
                    <textarea {...register("message")} className='border mt-1 text-gray-900 dark:text-gray-300 dark:bg-gray-800 border-yellow-300 rounded-lg p-1 px-[12px] resize-none' rows={5} cols={22} name="message" id="message"
                        placeholder="Votre message" />
                    
                    <input type="submit"
                        className='block mt-2 border border-yellow-300
                       rounded-xl p-1 hover:bg-yellow-300 transition-all
                        cursor-pointer bg-yellow-200 shadow-lg
                        dark:bg-yellow-300 dark:hover:bg-yellow-400' />
                </form>
            </div>
        </div>
    )
}

export default Contact

