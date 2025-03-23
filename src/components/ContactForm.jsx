export default function ContactForm() {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-4xl space-y-8 p-8 rounded-3xl bg-black">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-white">Get in Touch</h1>
            <p className="text-gray-400">Send us a message and we'll get back to you as soon as possible</p>
          </div>
  
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 text-black py-2 bg-white rounded-lg  focus:outline-none focus:ring-2 focus:ring-neutral-600  placeholder:text-black"
                placeholder="Enter your name"
              />
            </div>
  
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm text-white">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 text-black py-2 bg-white rounded-lg  focus:outline-none focus:ring-2 focus:ring-neutral-600 placeholder:text-black"
                placeholder="Enter your email"
              />
            </div>
  
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm text-white">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 text-black py-2 bg-white rounded-lg  focus:outline-none focus:ring-2 focus:ring-neutral-600 placeholder:text-black resize-none"
                placeholder="Enter your message"
              />
            </div>
  
            <button
              type="submit"
              className="hover-txt w-full bg-black text-white font-medium py-2 px-4 rounded-lg  transition-colors border border-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    )
  }
  
  