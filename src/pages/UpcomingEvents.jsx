export default function UpcomingEvents() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-[#222222]">
      <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>

      <div className="space-y-8">
        <div className="bg-gray-100 p-6 rounded-lg hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">Poetry Evening</h2>
          <p className="text-gray-700">📍 20th July, Mumbai</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">Stand-Up Comedy Show</h2>
          <p className="text-gray-700">📍 26th July, Ahilyanagar</p>
        </div>
      </div>
    </section>
  );
}
