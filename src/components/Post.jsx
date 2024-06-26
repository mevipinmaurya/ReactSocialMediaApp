import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { PostList } from "../store/posts-list-store";

const Post = ({ post }) => {

    const { deletePost } = useContext(PostList);

    return (
        <div className="card post-card" style={{ width: "40rem" }}>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    onClick={() => deletePost(post.id)}>
                    <MdDelete />
                </span>
                <p className="card-text">{post.body}</p>
                {post.tags.map((tag) => (
                    <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
                ))}
                <div className="mt-3">
                    <button type="button" className="btn btn-success">
                        <AiFillLike /> &nbsp;&nbsp;<span className="badge text-bg-danger">{post.reactions.likes}</span>
                    </button>&nbsp;&nbsp;
                    <button type="button" className="btn btn-success">
                        <AiFillDislike /> &nbsp;&nbsp;<span className="badge text-bg-danger">{post.reactions.dislikes}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Post;