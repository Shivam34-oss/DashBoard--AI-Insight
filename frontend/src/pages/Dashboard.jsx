import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [insights, setInsights] = useState([]);

  //  Define fetchInsights first
  const fetchInsights = async () => {
    try {
      const res = await API.get("/insights");
      setInsights(res.data);
    } catch (err) {
      console.error("Fetch insight error", err);
    }
  };

  //  Generate Insight
  const generateInsight = async () => {
    setLoading(true);

    // AI delay simulation
    setTimeout(async () => {
      try {
        await API.post("/insights/generate");
        await fetchInsights();
      } catch (err) {
        console.error("Generate insight error", err);
      } finally {
        setLoading(false);
      }
    }, 5000);
  };

  // useEffect after function definition
  useEffect(() => {
    fetchInsights();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Welcome to Dashboard 👋</h2>

      <button
        className="btn btn-dark my-3"
        onClick={generateInsight}
        disabled={loading}
      >
        Generate AI Insight
      </button>

      {loading && <p>Analyzing feedback with AI...</p>}

      <hr />

      <h4>AI Insight History</h4>

      {insights.length === 0 && (
        <p className="text-muted">
          No insights yet. Generate your first AI insight.
        </p>
      )}

      <ul className="list-group">
        {insights.map((item) => (
          <li key={item._id} className="list-group-item">
            <strong>{item.text}</strong>
            <br />
            <small className="text-muted">
              {new Date(item.createdAt).toLocaleString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}
