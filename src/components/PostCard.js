import { deleteDoc, doc } from "firebase/firestore/lite";
import { auth, db } from "../firebase/config";

export const PostCard = ({ post, toggle, setToggle }) => {

    const { id, title, description, author, created_at } = post;
    const authenticated = JSON.parse(localStorage.getItem("authenticated"));

    const ts = created_at.toDate().toLocaleDateString('en-us', {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    // console.log(d.replace(/\,/g,''));
    // console.log(created_at.toDate());
    // console.log((new Date(created_at.seconds * 1000)).toUTCString());

    async function handleDelete() {
        const document = doc(db, "posts", id);
        await deleteDoc(document);
        setToggle(!toggle);
    }

    return (
        <div className="card">
            <h4>{title}</h4>
            <p>{description}</p>
            <div className="info">
                <div className="user">
                    <div className="author">{author.name}</div>
                    <div className="timestamp">{ts.replace(/,/g, '')}</div>
                </div>
                {
                    authenticated &&
                    (author.id === auth.currentUser.uid) &&
                    <div onClick={handleDelete} className="control"><i className="bi bi-trash"></i></div>
                }
            </div>
        </div>
    );
}
