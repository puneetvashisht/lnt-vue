import http from "../utils/http-common";
import axios from "axios";
export default {
  getEmployees() {
    return http.get(`/employees`);
  },
  getEmployee(id) {
    return http.get(`/employees/${id}`);
  },
  createEmployee(employee) {
    return http.post(`/employees`, employee);
  },
  updateEmployee(id, employee) {
    return http.put(`/employees/${id}`, employee);
  },
  deleteEmployee(id) {
    return http.delete(`/employees/${id}`);
  },

  authenticate(){
    console.log('In service method..');
   return axios.post("http://localhost:8080/user", {}, {
      auth: {
        "username": "test@test.com",
        "password": "testtest"
      }
    });
  },

  authUrl(){
    console.log(' In test api service call..');
    return http.get(`/employee`, {
      headers: {
        // 'Authorization' : localStorage.getItem('token')
      }
    });
    // return axios.get('http://localhost:8080/api/v1/employee');
  }
  
};

