const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#BlogPost-title').value.trim();
  const description = document.querySelector('#BlogPost-desc').value.trim();

  if (title && description) {
    const response = await fetch(`/api/BlogPost`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create BlogPost');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/BlogPost/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete BlogPost');
    }
  }
};

document
  .querySelector('.new-BlogPost-form') // Make sure to use the correct form class or ID
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.BlogPost-list') // Make sure to use the correct list class or ID
  .addEventListener('click', delButtonHandler);
