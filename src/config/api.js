import axios from "axios";

const baseURL = "https://examination.onrender.com/";
const Api = axios.create({ baseURL });
Api.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log("token :>> ", token);
    if (token) {
      config.headers["access-token"] = token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

Api.interceptors.response.use(
  async (response) => {
    if (response?.status === 201 || response?.status === 200) {
      return response.data;
    } else if (response?.status === 204) {
      return Promise.reject("No Data Found...");
    } else {
      return Promise.reject(response?.data ?? "Something Went Wrong");
    }
  },
  async (error) => {
    if (error?.response?.status > 400) {
      // localStorage.setItem("access_token", "");
      // window.location.reload();
      return Promise.reject("Authorization Error");
    }

    return Promise.reject(
      error?.response?.data?.message ??
        error?.toString() ??
        "Something Went Wrong"
    );
  },
  //   async (err) => {
  //   const originalConfig = err.config;

  //   if (originalConfig.url !== "/dashboard/Teachers" && err.response) {
  //     // Access Token was expired
  //     if (err.response.status === 401 && !originalConfig._retry) {
  //       originalConfig._retry = true;
  //       console.log('expired Token :>> ', "expired Token");
  //       // try {
  //       //   const rs = await Api.post("/auth/refreshtoken", {
  //       //     refreshToken: TokenService.getLocalRefreshToken(),
  //       //   });

  //       //   const { accessToken } = rs.data;
  //       //   TokenService.updateLocalAccessToken(accessToken);

  //       //   return Api(originalConfig);
  //       // } catch (_error) {
  //       //   return Promise.reject(_error);
  //       // }
  //     }
  //   }

  //   return Promise.reject(err);
  // }
);
export default Api