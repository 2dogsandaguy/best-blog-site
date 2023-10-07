// Define your commentFormHandler function as you already have it

const commentFormHandler = async function (event) {
    event.preventDefault();

    const blog_id_element = document.querySelector('.new-comment-form');
    const blog_id = blog_id_element.getAttribute("data-blog_post_id");

    const comment_description = document.querySelector('#comment_description').value.trim();

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

// Add the code for the "Like" button here
document.querySelector('#like-button').addEventListener('click', function () {
    // Get the username (replace this with your actual way of getting the username)
    const username = 'JohnDoe'; // Replace with your username retrieval logic

    // Display the username in the "username-display" element
    const usernameDisplay = document.querySelector('#username-display');
    usernameDisplay.textContent = 'Liked by: ' + username;
    usernameDisplay.style.display = 'block'; 
});
