import { Link } from "react-router-dom";

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div><i className="bi bi-c-circle-fill"></i> <span>{year} <Link to="/">PostBlog</Link> All rights reserved.</span></div>
        </footer>
    );
};
