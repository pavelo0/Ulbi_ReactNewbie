import {useParams} from "react-router";
import {useFetching} from "../hooks/useFetching.js";
import PostService from "../API/PostService.js";
import {useEffect, useState} from "react";
import Loader from "../UI/Loader/Loader.jsx";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState('');
    const [comments, setComments] = useState([]);
    const [fetchPostByID, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data)
    })
    const [fetchComments, isCommsLoading, commsError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id);
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostByID(params.id);
        fetchComments(params.id);
    }, [])

    return (
        <div>
            <h1>Страница конкретного поста c ID {params.id}</h1>
            {error && <h1>Something went wrong</h1>}
            {isLoading ? <Loader /> : (
                <div className="">
                    <h1><span>{post.id}</span> {post.title}</h1>
                    <p>{post.body}</p>
                </div>
            )}
            <h2>Комментарии под постом:</h2>
            <div className="">
                {isCommsLoading ? <Loader /> : (
                    <div>
                        {comments.map((comment) => (
                            <div>
                                <h5><span>{comment.id}</span>{comment.name}</h5>
                                <h6>{comment.email}</h6>
                                <p>{comment.body}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostIdPage;