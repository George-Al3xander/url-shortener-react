import { VITE_BASE } from "@/lib/constants.ts";
import { API_BASE_URL } from "@/services/api/api.service.ts";
import toast from "react-hot-toast";

export const copyValueFromInput = (
    id: string,
): ((
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) => Promise<void>) => {
    return async (e): Promise<void> => {
        e.preventDefault();
        const input = document.getElementById(id) as HTMLInputElement;

        await toast.promise(navigator.clipboard.writeText(input.value), {
            loading: "Copying...",
            success: "Copied",
            error: "Failed to copy",
        });
    };
};

export const generateErrorObject = (
    id?: string,
): { title: string; description: string } => {
    const obj = { title: "Looks like this link is broken." };
    const redirectURlBase = new URL(API_BASE_URL);
    redirectURlBase.pathname = id!;
    Object.assign(obj, {
        description: `${id ? `The provided ID "${id}" in the API request URL "${redirectURlBase}" is invalid or doesn't match any of our records.` : ""} Please verify the link or return to the home page.`,
    });

    return obj as { title: string; description: string };
};

export const pathWithBase = (path: string) => `/${VITE_BASE}${path}`;
