import axios from 'axios';

const baseUrl = "http://localhost:8080/";

class FeedbackService {

    addfeedback(feedback, userId) {
        return axios.post(baseUrl + "feedback?userId=" + userId,feedback);
    }
    
}

export default new FeedbackService();