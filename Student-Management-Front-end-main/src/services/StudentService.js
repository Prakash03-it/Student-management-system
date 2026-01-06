import axios, { Axios } from "axios";

const REST_API_BASE_URL="http://localhost:8080/api/students";

export const listStudent =() =>  axios.get(REST_API_BASE_URL);

export const createStudents =(Students) =>axios.post(REST_API_BASE_URL , Students);
