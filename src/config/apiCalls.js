import Api from "./api";

const login = (data) => Api.post(`/users/Login`, data);

export default login
