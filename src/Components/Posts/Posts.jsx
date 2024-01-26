import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './posts.css'


const Posts = () => {
    const posts = useLoaderData()
    return (
        
        <div>
            <h1>Posts:{posts.length}</h1>
            <p>Read our posts to die lol</p>
            <div className="posts">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;