const commentFormHandler = async function (event) {
	event.preventDefault();

	const blog_id_element = document.querySelector('.new-comment-form').dataset.blogid;

	const blog_id= blog_id_element.getAttribute("data-blog_post_id").value.trim();

	if (comment_description) {
		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({
				blog_id,
				comment_description,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		document.location.reload();
	}
};

document
	.querySelector('.new-comment-form')
	.addEventListener('submit', commentFormHandler);