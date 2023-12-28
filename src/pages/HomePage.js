import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useRef, useState } from "react";
import { PostCard, SkeletonCard } from "../components";
import { db } from "../firebase/config";
import { useTitle } from "../hooks/useTitle";

export const HomePage = () => {
    useTitle("Home");

    const [posts, setPosts] = useState([false, false, false]);
    const [toggle, setToggle] = useState(false);

    const postsRef = useRef(collection(db, "posts"));

    useEffect(() => {
        async function getPosts() {
            const data = await getDocs(postsRef.current);
            setPosts(data.docs.map((document) => (
                { ...document.data(), id: document.id }
            )));
        }
        getPosts();
    }, [postsRef, toggle]);

    return (
        <section className="home">
            {
                posts.map((post, index) => (
                    post ? (
                        <PostCard key={post.id}
                            post={post}
                            toggle={toggle}
                            setToggle={setToggle} />
                    ) : (
                        <SkeletonCard key={index} />
                    )
                ))
            }
        </section>
    );
};
