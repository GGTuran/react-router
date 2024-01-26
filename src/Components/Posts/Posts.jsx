import { useLoaderData } from "react-router-dom";


const Posts = () => {
    const posts = useLoaderData()
    return (
        
        <div>
            <h1>Posts:{posts.length}</h1>
            <p>Read our posts to die lol</p>
        </div>
    );
};

export default Posts;