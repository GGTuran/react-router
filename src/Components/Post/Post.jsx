

const Post = ({post}) => {
    const{id, title, body} = post;
    const postStyle = {
        border: '2px solid black',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div style={postStyle}>
            <h1>UserId:{id}</h1>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default Post;