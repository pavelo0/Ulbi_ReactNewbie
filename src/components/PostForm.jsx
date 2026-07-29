import { useState } from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const PostForm = ({ create }) => {
	const [post, setPost] = useState({ title: '', body: '' });
	const addNewPost = e => {
		e.preventDefault();
		const newPost = {
			...post,
			id: Date.now()
		};

		create(newPost);
		setPost({ title: '', body: '' });
	};

	return (
		<form style={{ marginTop: '20px' }}>
			<MyInput
				onChange={event => setPost({ ...post, title: event.target.value })}
				value={post.title}
				placeholder={'Название поста'}
			/>
			<MyInput
				onChange={event => setPost({ ...post, body: event.target.value })}
				value={post.body}
				placeholder={'Описание поста'}
			/>

			<MyButton onClick={event => addNewPost(event)}>Создать пост</MyButton>
		</form>
	);
};

export default PostForm;
