import { useContext, useRef } from "react";
import { PostList as PostListData } from "../store/posts-list-store";

const CreatePost = () => {

    const { addPost } = useContext(PostListData);

    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const myTags = tagsElement.current.value.split(" ");

        userIdElement.current.value = "";
        postTitleElement.current.value = "";
        postBodyElement.current.value = "";
        reactionsElement.current.value = "";
        tagsElement.current.value = "";

        addPost(userId, postTitle, postBody, reactions, myTags);
    }

    return (
        <form className="create-post" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">User ID</label>
                <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="e.g. user1" />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="e.g. How are you feeling today?" />
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">Post Content</label>
                <textarea type="text" ref={postBodyElement} className="form-control" id="content" placeholder="e.g. About your post..." />
            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Reactions</label>
                <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="e.g. Number of reactions?" />
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Tags</label>
                <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="e.g. Enter Space Separated Hashtags?" />
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    )
}

export default CreatePost;