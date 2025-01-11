import { LoginData } from "../interfaces";
import { POST } from "../libs/axios/handlers";

export const logIn = async (authData: LoginData): Promise<any> => {
  const res = await POST({
    authenticated: true,
    path: "/api/login",
    body: { username: authData.email, password: authData.password },
    headers: { "Content-Type": "application/json" },
  });

  const { body } = res;
  return body;
};

// export const UserService = {
//   async uploadAvatar(file: File, user: any) {
//     const response = await HafApi.post("/api/login", {
//       email: user.email,
//       password: user.password,
//     });

//     const formData = new FormData();
//     formData.append("avatar", file);

//     await HafApi.post("/api/avatar", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//         Authorization: `Bearer ${String(response.data.token)}`,
//       },
//     });
//   },

//   async create(newUser: RegisterUser) {
//     const res = await HafApi.post("/api/signup", newUser);
//     return res.data;
//   },

//   async forgotPassword(data: ForgotPasswordForm): Promise<AxiosResponse> {
//     const { email } = data;
//     const res = await HafApi.post(`/api/forgot-password?email=${email}`);
//     return res;
//   },

//   async resetPassword(newPassword: string, token: string) {
//     const data = {
//       newPassword,
//       token,
//     };
//     const res = await HafApi.patch("/reset-password", data);
//     console.log(res);
//   },
// };
