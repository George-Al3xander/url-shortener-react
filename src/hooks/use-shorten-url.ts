import { IApiService } from "@/services/api/api.service.interface.ts";
import { TUrlEntity } from "@/types/types.ts";
import React, { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import isUrl from "validator/lib/isUrl";

const useShortenUrl = ({ post }: IApiService) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isCurrentUrlValid, setIsCurrentUrlValid] = useState(true);
    const [isFirstTime, setIsFirstTime] = useState(true);

    const [error, setError] = useState<{ message: string } | undefined>();
    const [shortenedResult, setShortenedResult] = useState<
        TUrlEntity | undefined
    >();

    const [currentUrl, setCurrentUrl] = useState("");
    const changeCurrentUrl = (e: ChangeEvent<HTMLInputElement>) =>
        setCurrentUrl(e.target.value);

    const shortenUrl = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(undefined);
        const result = await post(currentUrl);
        if ("message" in result) {
            toast.error(result.message);
            setError(result);
        } else {
            toast.success("URL shortened successfully.");
            setShortenedResult(result);
        }

        setIsLoading(false);
    };

    const reset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setCurrentUrl("");
        setShortenedResult(undefined);
        setError(undefined);
    };

    useEffect(() => {
        if (!isFirstTime) {
            setIsCurrentUrlValid(isUrl(currentUrl));
        } else {
            setIsFirstTime(false);
        }
    }, [currentUrl]);

    return {
        isLoading,
        error,
        shortenedResult,
        shortenUrl,
        currentUrl,
        changeCurrentUrl,
        isCurrentUrlValid,
        reset,
    };
};

export default useShortenUrl;
