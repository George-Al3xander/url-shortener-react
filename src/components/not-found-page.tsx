import { generateErrorObject } from "@/lib/utils.ts";
import { useParams } from "react-router-dom";

const NotFoundPage = () => {
    const { problemId } = useParams();

    const { title, description } = generateErrorObject(problemId);
    return (
        <main className="err-page-container">
            <small>ERROR</small>
            <h1>404</h1>
            <h2>{title}</h2>
            <p>{description}</p>
            <a className="button-base go-home-button" href="/">
                Go home
            </a>
        </main>
    );
};

export default NotFoundPage;
