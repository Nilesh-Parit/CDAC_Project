import React, { useState } from "react";
import FeedbackService from "../../services/FeedbackService";
import "./Feedback.css";

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    try {
      await FeedbackService.addfeedback(feedback, userId);
      setFeedback("");
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <>
      <h1
        id="header"
        style={{ marginTop: "8%", fontFamily: "black", color: "#29293d" }}
        className="text-center"
      >
        FlavourFeed
      </h1>
      <div className="card " id="feedback-card">
        <div className="card-body" id="card-body" style={{ marginTop: "2%" }}>
          {submitted ? (
            <p>Thank you for your feedback!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group" id="feedback-div">
                <label htmlFor="feedback">
                  <h2>Your Feedback</h2>
                </label>
                <textarea
                  className="form-control"
                  id="feedback"
                  rows="5"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="btn rounded-pill"
                  id="feebdack-btn"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
