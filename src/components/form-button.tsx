import React from "react";

const FormButton = ({
    resetForm,
    isShortening,
    isShorteningDone,
    isSubmitButtonDisabled,
}: {
    resetForm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isShortening: boolean;
    isShorteningDone: boolean;
    isSubmitButtonDisabled: boolean;
}) => {
    if (isShorteningDone)
        return (
            <button className="submit-button" onClick={resetForm}>
                Shorten new URL
            </button>
        );

    return (
        <button
            className="submit-button"
            disabled={isSubmitButtonDisabled}
            type="submit"
        >
            {isShortening ? "Shortening..." : "Shorten url"}
        </button>
    );
};

export default FormButton;
