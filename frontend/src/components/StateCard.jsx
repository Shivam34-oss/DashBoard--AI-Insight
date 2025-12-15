export default function StatCard({ title, value }) {
  return (
    <div className="card p-3 shadow-sm">
      <h6 className="text-muted">{title}</h6>
      <h3>{value}</h3>
    </div>
  );
}
