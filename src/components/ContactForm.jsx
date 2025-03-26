import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    emailjs.sendForm(
      'service_d9y9nkb',
      'template_c11lv4u',
      form.current,
      '4NcapcRxPXHfqtHGR'
    )
    .then((result) => {
      setIsSuccess(true);
      form.current.reset();
    })
    .catch((error) => {
      setIsError(true);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8 p-8 rounded-3xl bg-black">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-white">Get in Touch</h1>
          <p className="text-gray-400">Send us a message and we'll get back to you as soon as possible</p>
        </div>

        {isSuccess && (
          <div className="p-4 bg-green-100 text-green-700 rounded-lg">
            Message sent successfully!
          </div>
        )}

        {isError && (
          <div className="p-4 bg-red-100 text-red-700 rounded-lg">
            Failed to send message. Please try again.
          </div>
        )}

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 text-black py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-600 placeholder:text-black"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm text-white">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 text-black py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-600 placeholder:text-black"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 text-black py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-600 placeholder:text-black resize-none"
              placeholder="Enter your message"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="hover-txt w-full bg-black text-white font-medium py-2 px-4 rounded-lg transition-colors border border-white"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}