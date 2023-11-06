// src/components/Contact.tsx
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'
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
                        cursor-pointer bg-yellow-200 shadow-lg font-medium
                        dark:bg-yellow-300 dark:hover:bg-yellow-400' />
                        </form>
                    </div>

                    <div
                        className="md:hidden mt-[70px] mb-[50px] px-24 mx-32                text-center flex flex-col
                justify-center items-center
                rounded-xl border border-yellow-300 p-1 dark:bg-gray-800"
                    >
                        <h3 className="text-lg font-bold pt-2 pb-2  dark:text-gray-100">
                            {Strings.INFO}
                        </h3>

                        <div className='flex flex-col justify-center items-center'>
                            <div className="flex items-center">
                                <div className="w-[36px] h-[6px] bg-yellow-400 dark:bg-yellow-200 rounded-full"></div>
                                <div className="w-full border-[1px] mx-1"></div>
                                <p className="text-[14px]  dark:text-gray-200 font-medium">
                                    PRENOM
                                </p>
                                <div className="w-full border-[1px] mx-1"></div>
                                <div className="w-[36Px] h-[6px] bg-yellow-400 dark:bg-yellow-200 rounded-full"></div>
                            </div>
                            <p className="py-1 text-yellow-900 font-medium dark:text-yellow-300">
                                {Strings.PRENOM}
                            </p>
                            <div className="flex items-center">
                                <div className="w-[36px] h-[6px] bg-yellow-400 dark:bg-yellow-200 rounded-full"></div>
                                <div className="w-full border-[1px] mx-1"></div>
                                <p className="text-[14px]  dark:text-gray-200 font-medium">
                                    NOM
                                </p>
                                <div className="w-full border-[1px] mx-1"></div>
                                <div className="w-[36Px] h-[6px] bg-yellow-400 dark:bg-yellow-200 rounded-full"></div>
                            </div>
                            <p className="py-1 text-yellow-900 font-medium  dark:text-yellow-300">
                                {Strings.NOM}
                            </p>
                            <div className="flex items-center">
                                <div className="w-[36px] h-[6px] bg-yellow-400 dark:bg-yellow-200 rounded-full"></div>
                                <div className="w-full border-[1px] mx-1"></div>
                                <p className="text-[14px]  dark:text-gray-200 font-medium">
                                    ADDRESSES
                                </p>
                                <div className="w-full border-[1px] mx-1"></div>
                                <div className="w-[36Px] h-[6px] bg-yellow-400 dark:bg-yellow-200 rounded-full"></div>
                            </div>
                            <p className="py-1 text-yellow-900 font-medium  dark:text-yellow-300">
                                {Strings.ADDPHYSIQUE1}
                            </p>
                            <p className="py-1 text-yellow-900 font-medium  dark:text-yellow-300">
                                {Strings.ADDPHYSIQUE2}
                            </p>
                            <div className="flex items-center">
                                <div className="w-[36px] h-[6px] bg-yellow-400 dark:bg-yellow-200 rounded-full"></div>
                                <div className="w-full border-[1px] mx-1"></div>
                                <p className="text-[14px]  dark:text-gray-200 font-medium">EMAIL</p>
                                <div className="w-full border-[1px] mx-1"></div>
                                <div className="w-[36Px] h-[6px] bg-yellow-400 dark:bg-yellow-200 rounded-full"></div>
                            </div>

                            <p className="py-1 text-yellow-900 font-medium  dark:text-yellow-300"><a href="mailto:joob.18.12@gmail.com">{Strings.ADDEMAIL}</a></p>
                            <div className="flex items-center">
                                <div className="w-[36px] h-[6px] bg-yellow-400 dark:bg-yellow-200 rounded-full"></div>
                                <div className="w-full border-[1px] mx-1"></div>
                                <p className="text-[14px]  dark:text-gray-200 font-medium">TELEPHONES</p>
                                <div className="w-full border-[1px] mx-1"></div>
                                <div className="w-[36Px] h-[6px] bg-yellow-400 dark:bg-yellow-200 rounded-full"></div>
                            </div>
                            <p className="py-1 text-yellow-900 font-medium  dark:text-yellow-300">{Strings.TEL1}</p>
                            <p className="py-1 text-yellow-900 font-medium  dark:text-yellow-300">{Strings.TEL2}</p>
                        </div>
                    </div>

                </div>
                <div className="hidden mr-2 md:block md:mt-[140px] lg:mt-[120px] mt-[140px]">

                    <div
                        className="
                text-center flex flex-col
                justify-center items-center
                rounded-xl border border-yellow-300 lg:p-6 p-6 dark:bg-gray-800"
                    >
                        <h3 className="lg:text-2xl text-lg font-bold pb-4  dark:text-gray-100">
                            {Strings.INFO}
                        </h3>

                        <div className='flex flex-col justify-center items-center'>
                            <div className="flex items-center">
                                <div className="w-[36px] h-[6px] bg-yellow-400 dark:bg-yellow-200 rounded-full"></div>
                                <div className="w-full border-[1px] mx-1"></div>
                                <p className="text-[14px] lg:text-[18px] dark:text-gray-200 font-medium">
                                    PRENOM
                                </p>
                                <div className="w-full border-[1px] mx-1"></div>
                                <div className="w-[36Px] h-[6px] bg-yellow-400 dark:bg-yellow-200 rounded-full"></div>
                            </div>
                            <p className="py-1 pb-4 lg:text-[20px] text-yellow-900 font-medium dark:text-yellow-300">
                                {Strings.PRENOM}
                            </p>
                            <div className="flex items-center">
                                <div className="w-[36px] h-[6px] bg-yellow-400 dark:bg-yellow-200 rounded-full"></div>
                                <div className="w-full border-[1px] mx-1"></div>
                                <p className="text-[14px] lg:text-[18px]  dark:text-gray-200 font-medium">
                                    NOM
                                </p>
                                <div className="w-full border-[1px] mx-1"></div>
                                <div className="w-[36Px] h-[6px] bg-yellow-400 dark:bg-yellow-200 rounded-full"></div>
                            </div>
                            <p className="py-1 pb-4 lg:text-[20px] text-yellow-900 font-medium  dark:text-yellow-300">
                                {Strings.NOM}
                            </p>
                            <div className="flex items-center">
                                <div className="w-[36px] h-[6px] bg-yellow-400 dark:bg-yellow-200 rounded-full"></div>
                                <div className="w-full border-[1px] mx-1"></div>
                                <p className="text-[14px] lg:text-[18px]  dark:text-gray-200 font-medium">
                                    ADDRESSES
                                </p>
                                <div className="w-full border-[1px] mx-1"></div>
                                <div className="w-[36Px] h-[6px] bg-yellow-400 dark:bg-yellow-200 rounded-full"></div>
                            </div>
                            <p className="py-1 lg:text-[20px] text-yellow-900 font-medium  dark:text-yellow-300">
                                {Strings.ADDPHYSIQUE1}
                            </p>
                            <p className="py-1 pb-4 lg:text-[20px] text-yellow-900 font-medium  dark:text-yellow-300">
                                {Strings.ADDPHYSIQUE2}
                            </p>
                            <div className="flex items-center">
                                <div className="w-[36px] h-[6px] bg-yellow-400 dark:bg-yellow-200 rounded-full"></div>
                                <div className="w-full border-[1px] mx-1"></div>
                                <p className="text-[14px] lg:text-[18px]  dark:text-gray-200 font-medium">EMAIL</p>
                                <div className="w-full border-[1px] mx-1"></div>
                                <div className="w-[36Px] h-[6px] bg-yellow-400 dark:bg-yellow-200 rounded-full"></div>
                            </div>

                            <p className="py-1 pb-4 lg:text-[20px] text-yellow-900 font-medium  dark:text-yellow-300">
                                <a href="mailto:joob.18.12@gmail.com">{Strings.ADDEMAIL}</a></p>
                            <div className="flex items-center">
                                <div className="w-[36px] h-[6px] bg-yellow-400 dark:bg-yellow-200 rounded-full"></div>
                                <div className="w-full border-[1px] mx-1"></div>
                                <p className="text-[14px]  dark:text-gray-200 font-medium">TELEPHONES</p>
                                <div className="w-full border-[1px] mx-1"></div>
                                <div className="w-[36Px] h-[6px] bg-yellow-400 dark:bg-yellow-200 rounded-full"></div>
                            </div>
                            <p className="py-1 lg:text-[20px] text-yellow-900 font-medium  dark:text-yellow-300">{Strings.TEL1}</p>
                            <p className="py-1 lg:text-[20px] text-yellow-900 font-medium  dark:text-yellow-300">{Strings.TEL2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

