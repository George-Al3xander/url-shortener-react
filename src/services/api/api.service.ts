import { IApiService } from "@/services/api/api.service.interface";
import { TUrlEntity } from "@/types/types.ts";
import axios, { AxiosError } from "axios";

const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export class ApiService implements IApiService {
    async post(url: string): Promise<TUrlEntity | { message: string }> {
        try {
            const response = axios.post<TUrlEntity>(API_BASE_URL, {
                url,
                secret_token: import.meta.env.VITE_SECRET_TOKEN,
            });
            return (await response).data;
        } catch (e) {
            if (e instanceof AxiosError && "response" in e && e.response) {
                return e.response.data;
            }
            return { message: "Something went wrong" };
        }
    }
}
