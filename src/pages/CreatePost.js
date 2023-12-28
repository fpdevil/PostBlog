import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/config";
import { useTitle } from "../hooks/useTitle";

export const CreatePost = () => {
    useTitle("Create Post");

    const navigate = useNavigate();
    const postRef = collection(db, "posts");

    async function handleCreatePost(event) {
        event.preventDefault();

        const document = {
            title: event.target.title.value,
            description: event.target.description.value,
            author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid
            },
            created_at: serverTimestamp()
        };
        await addDoc(postRef, document);

        navigate('/');
    }

    return (
        <section className="create-post" onSubmit={handleCreatePost}>
            <div className="heading">
                <h1>Add New Post</h1>
            </div>
            <form className="create-form">
                <input
                    name="title"
                    type="text"
                    placeholder="Title of Post"
                    maxLength="70"
                    required
                    className="title"
                />
                <textarea
                    name="description"
                    type="text"
                    placeholder="Description of Post"
                    maxLength="600"
                    required
                    className="description"
                ></textarea>
                <button type="submit" className="submit">
                    Create
                </button>
            </form>
        </section>
    );
};
