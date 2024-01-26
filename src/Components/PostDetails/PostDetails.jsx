import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const{body} = post;
    return (
        <div>

            <p>{body}</p>
            
        </div>
    );
};

export default PostDetails;