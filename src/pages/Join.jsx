export default function Join() {
  return (
    <div className="max-w-xl mx-auto px-6 pt-32 pb-20 text-[#222222] min-h-[80vh]">
      <h1 className="text-4xl font-bold mb-4 text-center">Join The DUO CLUB</h1>
      <p className="text-center text-gray-600 mb-10">
        We are excited to know about your talents. Fill the form below!
      </p>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Full Name"
          className="w-full border border-black rounded px-4 py-2 focus:outline-none"
          required
        />
        <input
          type="email"
          placeholder="Your Email Address"
          className="w-full border border-black rounded px-4 py-2 focus:outline-none"
          required
        />
        <textarea
          placeholder="Tell us briefly about your art / experience / interest"
          className="w-full border border-black rounded px-4 py-2 h-32 focus:outline-none"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-2xl hover:bg-[#222222] transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
