// src/components/Contact.tsx
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import ProfilePic from './ProfilePic'
import ProgressBar from './ProgressBar'
import Strings from '../shared/Strings'

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
            <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3">
                <div className="col-span-2 ">
                    <div className='flex justify-center flex-col items-center'>
                        <div className='h-[120px] border-r-[1px] mt-[90px]' />
                        <div className='w-[5px] h-[5px] bg-yellow-300 rounded-full'></div>
                        <form className='mt-[10px]' onSubmit={handleSubmit(onSubmit)}>
                            <label className='block mt-4 p-1 font-medium text-gray-900 dark:text-yellow-300' htmlFor="subject">Objet du mail</label>
                            <input {...register("subject")} className='border mt-1 text-gray-900 dark:text-gray-300 dark:bg-gray-800 border-yellow-300 rounded-lg p-1 px-[12px]' type="text" name="subject" id="subject"
                                placeholder="Quel est l'objet du mail ?" />

                            <label className='block mt-2 p-1 font-medium text-gray-900 dark:text-yellow-300' htmlFor="email">Email</label>
                            <input {...register("email", { required: true })} className='border mt-1 text-gray-900 dark:text-gray-300 dark:bg-gray-800 border-yellow-300 rounded-lg p-1 px-[12px]' type="email" name="email" id="email"
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

                    <div
                        className="md:hidden mt-[70px]
                text-center flex flex-col
                justify-center items-center
                rounded-xl border border-gray-300 my- p-10 bg-gray-100/50 dark:bg-yellow-300/70"
                    >
                        <h3 className="text-lg font-medium pt-8 pb-2  dark:text-gray-900">INFORMATIONS PERSONELLES</h3>
                        <p className="py-2  text-yellow-600 dark:text-yellow-50">
                            {Strings.AN4}
                        </p>
                        <p className="py-1 text-yellow-900 font-serif dark:text-stone-800">
                            {Strings.DIPLOME4}
                        </p>
                    </div>

                </div>
                <div className="hidden md:block mt-[120px]">
                    
                    <div
                        className="mt-[120px]
                text-center flex flex-col
                justify-center items-center
                rounded-xl border border-gray-300  p-1 bg-gray-100/50 dark:bg-yellow-300/70"
                    >
                        <h3 className="text-lg font-medium pt-8 pb-2  dark:text-gray-900">
                            INFORMATIONS PERSONELLES
                        </h3>
                        <p className="py-2  text-yellow-600 dark:text-yellow-50">
                            {Strings.AN4}
                        </p>
                        <p className="py-1 text-yellow-900 font-serif dark:text-stone-800">
                            {Strings.DIPLOME4}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

