import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const{body} = post;
    const navigate = useNavigate();

    const handleGetBack = () => {
        navigate(-1);
    }
    return (
        <div>

            <p>{body}</p>
            <button onClick={handleGetBack}>get back</button>
            
        </div>
    );
};

export default PostDetails;