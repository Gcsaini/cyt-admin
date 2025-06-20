let apiUrl;
const currentDomain = window.location.hostname;

if (currentDomain === "localhost") {
  apiUrl = "http://localhost:4000/api";
} else {
  apiUrl = "https://cyt-backend.onrender.com/api";
}
export const fileBaseUrl =
  "https://chooseyourtherapist.s3.ap-south-1.amazonaws.com/";
export const loginUrl = `${apiUrl}/auth/login`;
export const getTherapists = `${apiUrl}/get-therapists`;
export const sendAproveMail = `${apiUrl}/send-aprove-mail`;
export const aprovedTherapist = `${apiUrl}/aprove-therapist`;
export const toggleActive = `${apiUrl}//toggle-active`;
