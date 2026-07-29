import PostItem from './PostItem';

const PostList = ({ title, posts, remove }) => {
	if(posts.length === 0) {
		return (
			<div>
				<h1 style={{ textAlign: 'center', paddingTop: '100px' }}>
					Посты не найдены!
				</h1>
			</div>
		)
	}

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>

			{posts.map((post, index) => (
				<PostItem
					number={index + 1}
					post={post}
					key={post.id}
					remove={remove}
				/>
			))}
		</div>
	);
};

export default PostList;
