import React from "react";
import mail from "../assets/mail.jpg";

function Contact() {
  // Formspree endpoint URL
  const formspreeEndpoint = "https://formspree.io/f/xdknkqjz"; // Replace with your Formspree endpoint

  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen p-6 md:p-12 flex flex-col items-center">
      {/* Contact Us Heading */}
      <h1 className="text-4xl text-[#2358aa] font-extrabold text-foreground mb-8 text-center">
        Contact Me
      </h1>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Contact Information */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8 text-[#2358aa]">
          <h2 className="text-3xl font-extrabold text-foreground mb-4">
            Let's chat.
            <br />
            Tell me about your project.
          </h2>
          <p className="text-muted-foreground mb-6 text-lg">
            Let's create something together ✨
          </p>
          <div className="flex items-center bg-card p-4 rounded-lg shadow-lg">
            <img src={mail} alt="email icon" className="mr-4 w-8 h-8" />
            <div>
              <p className="text-muted-foreground text-sm">Mail me at</p>
              <a
                href="mailto:annishhacharya@gmail.com"
                className="text-primary font-medium hover:underline"
              >
                annishhacharya@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-card p-8 rounded-lg shadow-lg text-[#2358aa]">
          <h2 className="text-3xl font-extrabold text-foreground mb-6">
            Send me a message 🚀
          </h2>
          <form
            action="https://formspree.io/f/xdknkqjz"
            method="POST"
            className="space-y-4"
          >
            <div className="mb-4">
              <label
                htmlFor="full-name"
                className="block text-muted-foreground mb-2 text-sm font-medium"
              >
                Full name*
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name" // Add name attribute
                placeholder="Enter your full name"
                className="w-full p-3 border border-input rounded-lg focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-muted-foreground mb-2 text-sm font-medium"
              >
                Email address*
              </label>
              <input
                type="email"
                id="email"
                name="email" // Add name attribute
                placeholder="Enter your email address"
                className="w-full p-3 border border-input rounded-lg focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-muted-foreground mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject" // Add name attribute
                placeholder="Enter subject"
                className="w-full p-3 border border-input rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-muted-foreground mb-2 text-sm font-medium"
              >
                Tell me more about your project*
              </label>
              <textarea
                id="message"
                name="message" // Add name attribute
                className="w-full p-3 border border-input rounded-lg focus:ring-primary focus:border-primary"
                rows="4"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-3 rounded-lg font-medium hover:opacity-90 transition duration-300"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
