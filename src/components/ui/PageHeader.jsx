export default function PageHeader({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
        {title}
      </h1>
      <p className="text-gray-400 mt-1">{subtitle}</p>
    </div>
  );
}
