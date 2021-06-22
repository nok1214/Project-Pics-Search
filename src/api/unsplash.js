import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID clHykG-oQwuRNaLaSpZ2UUvoJ9HQc5raRVBbRPSjsTg",
  },
});
