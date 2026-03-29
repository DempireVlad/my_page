import type { Route } from "./+types/index";
import { Form } from "react-router";

export async function action({ request }: Route.ActionArgs) {
    const formData = await request.formData();

    const errors: Record<string, string> = {};


    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!name) errors.name = "Name is required";
    if (!email) {
        errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email as string)) {
        errors.email = "Invalid email format";
    }
    if (!subject) errors.subject = "Subject is required";
    if (!message) errors.message = "Message is required";
    console.log(errors);

    if (Object.keys(errors).length > 0) {
        return { errors };
    }

    console.log({ name, email, subject, message });
    const data = {
        name,
        email,
        subject,
        message
    }

    return { message: "Form successfully submitted", data };
}

const ContactPage = ({ actionData }: Route.ComponentProps) => {
const errors = actionData?.errors || {};

    return (
        <section className='max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-900'>
            <h2 className='text-3xl font-bold text-white mb-8 text-center'>
                📬 Contact Me
            </h2>

            {actionData?.message ?(<div className="mb-6 p-4 text-green-800 bg-green-200 rounded">
                    {actionData.message}
                </div>) : null}


            <form className='space-y-6' action="https://formspree.io/f/mojkvoqk" method="post">
          
                <div>
                    <label
                        htmlFor='name'
                        className='block text-sm font-medium text-gray-300'
                    >
                        Full Name
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100'
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                
                <div>
                    <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-300'
                    >
                        Email Address
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100'
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

               
                <div>
                    <label
                        htmlFor='subject'
                        className='block text-sm font-medium text-gray-300'
                    >
                        Subject
                    </label>
                    <input
                        type='text'
                        id='subject'
                        name='subject'
                        className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100'
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

              
                <div>
                    <label
                        htmlFor='message'
                        className='block text-sm font-medium text-gray-300'
                    >
                        Message
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        rows={5}
                        className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100'
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

               
                <button
                    type='submit'
                    className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition'
                >
                    Send Message
                </button>

            </form>
        </section>
    );
};

export default ContactPage;