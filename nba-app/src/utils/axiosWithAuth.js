import axios from 'axios';

export const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const axiosLoginAuth = () => {
    return axios.create({
      headers: {
        Authorization: "Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0"
      }, baseURL: "https://nba-career-longevity.herokuapp.com/"
    });
  };