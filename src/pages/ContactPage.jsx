import React from "react";

function ContactPage() {
  return (
    <section className="px-6 py-10 pt-[72px] max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <p className="text-center text-gray-600 mb-8">
        Interested in working together or just want to say hi? Feel free to
        reach out!
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition-colors"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 text-center text-sm text-gray-500">
        Or email me directly:{" "}
        <a
          href="mailto:kamu@email.com"
          className="text-indigo-600 hover:underline"
        >
          kamu@email.com
        </a>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://linkedin.com/in/username"
          target="_blank"
          className="hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/username"
          target="_blank"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://instagram.com/username"
          target="_blank"
          className="hover:underline"
        >
          Instagram
        </a>
      </div>
    </section>
  );
}

export default ContactPage;
