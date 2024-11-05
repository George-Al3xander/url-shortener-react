import { copyValueFromInput } from "@/lib/utils.ts";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { v4 as uuidv4 } from "uuid";

const Input = ({
    disabled,
    required,
    isInvalid = false,
    errMessage,
    name,
    ...props
}: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & { name: string; isInvalid?: boolean; errMessage?: string }) => {
    const inputId = uuidv4();

    return (
        <label
            className={`input-label ${isInvalid ? "input-label-invalid" : ""}`}
            htmlFor={inputId}
        >
            <p>
                {name}
                {required && "*"}
            </p>
            <span>
                <input
                    required={required}
                    disabled={disabled}
                    id={inputId}
                    {...props}
                />
                <button
                    disabled={disabled}
                    onClick={copyValueFromInput(inputId)}
                >
                    Copy
                </button>
            </span>
            {isInvalid && errMessage && (
                <small className="input-err-message">{errMessage}</small>
            )}
        </label>
    );
};

export default Input;
