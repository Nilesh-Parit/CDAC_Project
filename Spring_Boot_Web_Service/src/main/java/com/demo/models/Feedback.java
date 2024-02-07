package com.demo.models;
import javax.persistence.*;
import javax.validation.constraints.NotBlank; 

@Entity
@Table(name = "tbl_feedback")
public class Feedback {
    @Id
    @Column(name = "feedback_id")
    private String feedbackId;
    
    @NotBlank(message = "Feedback cannot be Blank")
    @Column(name = "feedback")
    private String feedback;
    
    @ManyToOne
    private User u;
	
    public User getUser() {
		return u;
	}

	public void setUser(User u) {
		this.u = u;
	}

	public Feedback() {
		super();
	}

	public Feedback(String feedbackId, String feedback) {
		super();
		this.feedbackId = feedbackId;
		this.feedback = feedback;
	}
	
	public String getFeedbackId() {
		return feedbackId;
	}

	public void setFeedbackId(String feedbackId) {
		this.feedbackId = feedbackId;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	@Override
	public String toString() {
		return "Feedback [feedbackId=" + feedbackId + ", feedback=" + feedback + "]";
	}   
}
