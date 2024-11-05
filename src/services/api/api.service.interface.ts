import { TUrlEntity } from "@/types/types.ts";

export interface IApiService {
    post: (url: string) => Promise<TUrlEntity | { message: string }>;
}
