import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                        Hi, I'm George
                        <br className="hidden lg:inline-block" />I love to build amazing web
                        apps.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I’m a motivated college sophomore with a solid foundation in full-stack web development.
                        I have hands-on experience with PHP, React, HTML, CSS, and server-side scripting,
                        and I’m skilled in creating dynamic and efficient web applications.
                    </p>
                    <p className="mb-8 leading-relaxed">
                        I’m passionate about solving problems, improving performance, and designing features
                        that users love. As an excellent communicator committed to learning and growth,
                        I’m eager to contribute to exciting projects through an internship or co-op position
                        as a Junior Web Developer.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="profile_photo"
                        src="./profile_photo.jpg"
                        width="400"
                        height="400"
                    />
                </div>
            </div>
        </section>
    );
}