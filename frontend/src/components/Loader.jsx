export default function Loader({ text }) {
  return (
    <div className="mt-3">
      <div className="spinner-border spinner-border-sm me-2" />
      <span>{text || "Analyzing with AI..."}</span>
    </div>
  );
}
