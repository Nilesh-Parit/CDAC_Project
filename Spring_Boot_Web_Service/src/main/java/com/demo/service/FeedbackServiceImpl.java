package com.demo.service;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demo.dao.FeedbackDao;
import com.demo.models.Feedback;
import com.demo.models.Ingredient;
import com.demo.models.User;


@Service
public class FeedbackServiceImpl implements FeedbackService {
	
	@Autowired
	 private FeedbackDao fdao;

	@Override
	public List<Feedback> getAllFeedbacks() {
		return fdao.findAll();
	}

	@Override
	public Boolean addNewFeedback(Feedback f) {
		try {
	        fdao.save(f);
	        return true;
	    } catch (Exception e){
	        return false;
	    }
	}

	@Override
	public Feedback getFeedbackById(String fid) {
		Optional<Feedback> op=fdao.findById(fid);
		 if(op.isPresent()) {
			 return op.get();
		 }
		 return null;
	}

	@Override
	public Boolean updateFeedbackById(Feedback f) {
		Optional<Feedback> op=fdao.findById(f.getFeedbackId());
		if(op.isPresent()) {
			Feedback f1=op.get();
			f1.setFeedback(f.getFeedback());
			if(fdao.save(f1)!=null) {
				return true;
			}
		}
		return false;
	}

	@Override
	public Boolean deleteFeedbackById(String fid) {
		if (fdao.existsById(fid)) {
			fdao.deleteById(fid);
			return true;
		}
		return false;	
	}
	
	public User getUserByFeedback(String feedbackId) {
	    Feedback feedback = fdao.findById(feedbackId).orElse(null);
	    if (feedback != null) {
	        return feedback.getUser();
	    } else {
	        return null;
	    }
	}
}
