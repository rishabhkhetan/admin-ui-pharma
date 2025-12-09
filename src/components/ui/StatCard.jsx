import GlassCard from "./GlassCard";

export default function StatCard({ label, value }) {
  return (
    <GlassCard>
      <h3 className="text-gray-400 text-sm">{label}</h3>
      <p className="text-3xl font-bold mt-1">{value}</p>
    </GlassCard>
  );
}
