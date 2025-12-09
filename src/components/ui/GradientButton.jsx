export default function GradientButton({ text }) {
  return (
    <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500
    hover:scale-105 transition-transform duration-200 font-medium shadow-lg">
      {text}
    </button>
  );
}
