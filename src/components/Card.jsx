// src/components/Card.jsx
export default function Card({ title, children }) {
  return (
    <div className="p-5 border rounded-lg shadow-sm bg-white dark:bg-gray-800">
      {title && <h2 className="text-lg font-bold mb-3">{title}</h2>}
      {children}
    </div>
  );
}
