# Tech Blog



## Description

The Tech Blog is a web application that allows users to create, view, and comment on blog posts related to technology. It provides a platform for tech enthusiasts to share their knowledge and insights with others.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run the Tech Blog on your local machine, follow these steps:

1. Clone the repository to your local machine using `git clone`.

   ```bash
   git clone https://github.com/your-username/tech-blog.git
   
   cd tech-blog

   npm install

   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_HOST=your_database_host
   DB_PORT=your_database_port
   SESSION_SECRET=your_session_secret

   mysql -u your_database_user -p your_database_name < db/schema.sql

   npm start

Open your web browser and access the application at http://localhost:3001.

# Usage
- Home Page: The home page displays a list of blog posts. Users can click on a blog post to view its details.
- Login/Sign Up: Users can create an account or log in to an existing one.
- Profile Page: Logged-in users can access their profile page, where they can create new blog posts and view their existing posts.
- Blog Post Page: Users can view the details of a specific blog post, including its title, author, creation date, and comments.
- Comments: Logged-in users can leave comments on blog posts.

# Technologies Used

- Node.js
- Express.js
- Handlebars.js
- MySQL
- Sequelize (ORM)
- Bootstrap
- HTML5/CSS3
- JavaScript
# Features
- User authentication and authorization.
- Create, edit, and delete blog posts.
- Leave comments on blog posts.
- View user profiles and their blog posts.
- Responsive design for various screen sizes.