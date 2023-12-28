import { NavLink } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
    useTitle("PageNotFound");

    return (
        <section className="pagenotfound">
            <div className="container">
                <div className="item">
                    <p>404</p>
                </div>
                <div className="item">
                    <img
                        alt="Page Not Found"
                        src="https://cdn.pixabay.com/photo/2023/05/01/06/41/dog-7962236_1280.png"
                    />
                </div>

                <div className="item">
                    <p className="message">Oops! Nothing here</p>
                    <NavLink to="/" className="home">
                        Back To Home
                    </NavLink>
                </div>
            </div>
        </section>
    );
};
