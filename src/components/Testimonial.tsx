import {type Testimonial} from "../data/templates";

export default function Testimonial() {

    const testimonial = {
        author: {
            name: "John Doe",
            role: "CEO at Tailus",
            imageLink: "/"
        },
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempus id, semper eget orci.'
    };

    return (
        <div className="mt-12 sm:mt-16 lg:mt-20">
            <div className="relative mx-auto max-w-xl text-center text-gray-700 dark:text-gray-200">
                <div className="relative mx-auto mb-8 flex size-16 rounded-full bg-white shadow-gray-600 transition duration-300 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-600/20 after:absolute after:-inset-2 after:animate-ping after:rounded-full after:border after:border-gray-600/10 after:delay-300 dark:bg-gray-900 dark:shadow-2xl dark:shadow-gray-500 dark:before:border-white/10 dark:after:border-white/10 dark:hover:bg-white/10">
                    <img className="m-auto size-12 rounded-full" src={testimonial.author.imageLink} alt={testimonial.author.name} width="400" height="400"/>
                </div>
                <blockquote>
                    <p className="text-lg">"{testimonial.content}"</p>
                </blockquote>

                <div className="mt-8 flex items-center justify-center gap-4">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-white">{testimonial.author.name}</h3>
                    <span aria-hidden="true" className="h-[0.175rem] w-[0.175rem] rounded-full bg-gray-950/30 dark:bg-white/30"></span>
                    <span className="block text-sm tracking-wide text-gray-600 dark:text-gray-300">{testimonial.author.role}</span>
                </div>
            </div>
        </div>
    );
}
