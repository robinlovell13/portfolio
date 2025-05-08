const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-8">
      <div className=" w-full">
        <h2 className="text-4xl mb-12 text-center">Let's Connect</h2>
        {/* <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input type="text" id="name" name="name" className="w-full p-2 bg-transparent border-2 border-white text-starWhite" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input type="email" id="email" name="email" className="w-full p-2 bg-transparent border-2 border-white text-starWhite" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-2 bg-transparent border-2 border-white text-starWhite"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-starWhite text-black p-2 hover:bg-gray-300">
            Send Message
          </button>
        </form> */}
        <p className="text-center text-lg">
        email: robin lovell 13 at gmail dot com
          
        </p>
      </div>
    </section>
  )
}

export default Contact

