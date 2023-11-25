document.addEventListener('DOMContentLoaded', async function () {
    const updateFormHandler = async (event) => {
      event.preventDefault();
  
    // Get the blog_id from the URL using a more robust method
    const blogPathMatch = window.location.pathname.match(/\/blog\/update\/(\d+)$/);
    const blog_id = blogPathMatch ? blogPathMatch[1] : null;

      // Get values from the update form
      const title = document.querySelector('#update-title').value.trim();
      const description = document.querySelector('#update-description').value.trim();

      console.log('blog_id:', blog_id);
console.log('title:', title);
console.log('description:', description);

  
      try {
        // Error occurs here because blog_id is not defined
        const response = await fetch(`/blog/update/${blog_id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, description }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          console.error('Error during update request:', response.statusText);
        }
      } catch (error) {
        console.error('Error during update request:', error.message);
      }
    };
  
    // Add event listener to the update form
    const updateForm = document.querySelector('#update-blog-form');
    if (updateForm) {
      updateForm.addEventListener('submit', updateFormHandler);
    }
  });
  