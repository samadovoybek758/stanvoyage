import { api } from "./index";

interface LoginResponse {
  token: string;
  user?: [
    {
      id: number;
      username: string;
      email: string;
      first_name: string;
      last_name: string;
      is_active: boolean;
      is_staff: boolean;
      is_superuser: boolean;
    }
  ];
}

interface LoginRequest {
  username: string;
  password: string;
}

export const loginApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/authentication/log-in/",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
