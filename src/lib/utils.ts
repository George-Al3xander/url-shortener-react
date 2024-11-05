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
