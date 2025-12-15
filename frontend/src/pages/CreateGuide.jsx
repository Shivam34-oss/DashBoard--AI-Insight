import { useState } from "react";
import API from "../services/api";

export default function CreateGuide() {
  const [title, setTitle] = useState("");
  const [steps, setSteps] = useState("");

  const submit = async () => {
    await API.post("/guides", {
      title,
      steps: steps.split("\n")
    });
    alert("Guide Created");
  };

  return (
    <div className="container mt-4">
      <h3>Create Product Guide</h3>

      <input
        className="form-control mb-3"
        placeholder="Guide Title"
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        className="form-control mb-3"
        rows="6"
        placeholder="somthing else.."
        onChange={e => setSteps(e.target.value)}
      />

      <button onClick={submit} className="btn btn-dark">
        Save Guide
      </button>
    </div>
  );
}
