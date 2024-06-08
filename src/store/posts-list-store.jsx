import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter((post) => (
            post.id !== action.payload.postId
        ));
    }
    else if (action.type === "ADD_POST") {
        newPostList = [action.payload, ...currPostList];
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = (userId, postTitle, postBody, reactions, myTags) => {
        // console.log(userId, postTitle, postBody, reactions, myTags);
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: myTags,
            }
        })
    }
    const deletePost = (postId) => {
        // console.log(`Deleting post ${postId}`)
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            }
        })
    }

    return (
        <PostList.Provider value={
            {
                postList,
                addPost,
                deletePost,
            }
        }> {children}</PostList.Provider >
    )
}

const DEFAULT_POST_LIST = [
    {
        id: "1",
        title: "Going to Mumbai",
        body: "I am going to Mumbai for my vacations. Enjoying vacation.Sometimes triping and enjoying is important for metal and physical health.",
        reactions: 2,
        userId: "user-9",
        tags: ["vacations", "Mumbai", "Enjoying"],
    },
    {
        id: "2",
        title: "Learning React js",
        body: "I am learning Reactjs from basic by Prasant Sir. He is a good teacher as he teaches very good.",
        reactions: 15,
        userId: "user-10",
        tags: ["ReactJs", "Learn"],
    },
]

export default PostListProvider;