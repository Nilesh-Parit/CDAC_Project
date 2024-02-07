package com.demo.service;
import java.util.List;
import com.demo.models.Feedback;
import com.demo.models.User;

public interface FeedbackService {

	List<Feedback> getAllFeedbacks();

	Boolean addNewFeedback(Feedback f);

	Feedback getFeedbackById(String fid);

	Boolean updateFeedbackById(Feedback f);

	Boolean deleteFeedbackById(String fid);

	User getUserByFeedback(String feedbackId);

}

