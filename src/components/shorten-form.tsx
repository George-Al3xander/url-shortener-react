import FormButton from "@/components/form-button.tsx";
import Input from "@/components/input.tsx";
import useShortenUrl from "@/hooks/use-shorten-url.ts";
import { ApiService } from "@/services/api/api.service.ts";

const ShortenForm = () => {
    const {
        isLoading,
        isCurrentUrlValid,
        shortenedResult,
        currentUrl,
        changeCurrentUrl,
        shortenUrl,
        reset,
    } = useShortenUrl(new ApiService());

    return (
        <form onSubmit={shortenUrl} className="shorten-form">
            <Input
                name={"Long URL"}
                placeholder={"Put long URL"}
                errMessage={"Enter a valid url"}
                isInvalid={!isCurrentUrlValid}
                required
                value={currentUrl}
                onChange={changeCurrentUrl}
            />
            <Input
                name={"Short URL"}
                disabled={!shortenedResult || isLoading}
                readOnly
                placeholder={"Here is shortened URL"}
                defaultValue={shortenedResult?.redirect_url}
            />

            <FormButton
                resetForm={reset}
                isShortening={isLoading}
                isShorteningDone={Boolean(shortenedResult)}
                isSubmitButtonDisabled={isLoading || !isCurrentUrlValid}
            />
        </form>
    );
};

export default ShortenForm;
