import MyButton from '../UI/button/MyButton';
import {useNavigate} from "react-router";

const PostItem = ({ post, remove }) => {
	const navigate = useNavigate();

	return (
		<div className="post">
			<div className="post__content">
				<strong>
					{post.id}. {post.title}
				</strong>
				<p className="">{post.body}</p>
			</div>

			<div className="post__btns">
				<MyButton onClick={() => navigate(`/posts/${post.id}`)}>Открыть</MyButton>
				<MyButton onClick={() => remove(post)}>Удалить</MyButton>
			</div>
		</div>
	);
};

export default PostItem;
