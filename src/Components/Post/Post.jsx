import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const{id, title, body} = post;
    const postStyle = {
        border: '2px solid black',
        padding: '5px',
        borderRadius: '20px'
    }

    const navigate = useNavigate();

    const handleShowDetail = () => {
            navigate(`/post/${id}`)
    }


    return (
        <div style={postStyle}>
            <h1>UserId:{id}</h1>
            <h1>{title}</h1>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Details</Link>
            <Link to={`/post/${id}`}>
                <button>Spank me</button>
            </Link>
            <button onClick={handleShowDetail}>Click to show details</button>
        </div>
    );
};

export default Post;