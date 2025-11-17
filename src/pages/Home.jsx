// src/pages/Home.jsx
export default function Home({ setCurrentPage }) {
  return (
    <section className="text-center py-16">
      <h1 className="text-5xl font-extrabold mb-6">Welcome to MyTASK</h1>
      <p className="text-lg mb-8">
        Your productivity center - organized, simple, powerful.
      </p>
      <button
        onClick={() => setCurrentPage("tasks")}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Manage Tasks
      </button>
    </section>
  );
}