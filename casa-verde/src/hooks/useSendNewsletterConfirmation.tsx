import axios from "axios";

const useSendNewsletterConfirmation = () => {

  return () => {
    return axios.post("https://api.emailjs.com/api/v1.0/email/send", {
      "service_id": "service_f99bkfh",
      "template_id": "template_j8b5j0y",
      "user_id": "7WF2j6knCp3rvTL4M"
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

};

export default useSendNewsletterConfirmation;