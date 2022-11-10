# Smiley Dental Services

### Live Website Link https://smiley-dental-services.web.app/

## Description
The Project is developed using ReactJS, ExpressJS and FireBase and MongoDB, The app is responsive on smaller devices

### CSS Freamework
TailWind CSS Framework and DaisyUI components

### React Library's used
Some of the library's that was used in the project

#### React Router
 - To navigate the website
 - To load data from the API
 - To make dynamic paths for the website component
 - To make private routing
 - To redirect user

#### React Hot Toast
 - To display messages

#### React Icons
 - To display icons

#### React Helmet
 - To dynamically display site title

#### React Photo View
 - To preview photos

### Pages
The website consists of 8 main pages

 - Home
 - Services
 - Blogs
 - Login
 - Register
 - Service Details
 - My Reviews
 - Add Service

The Service Details page is dynamic which changes based on selected service

### Features
Features of the website

 - Navbar can be used to navigate the website
 - Navbar has conditional rendering based on user login and logout
 - Homepage contains a latest service list, Pricing package list, and Dentist bio
 - Services page contains service list that can be selected
 - Selecting a service takes user to the selected Service Details page
 - Service Details page shows the name, image, price, rating and description of the service
 - Service Details page has a reviews section at the bottom that displays all the reviews of the service
 - Users can add reviews here, if they are logged in they will see a review form else they will see login button
 - Blogs page shows the list of blogs with image, title, author name, description
 - My Reviews page and Add service has private routing, users can only access these pages after login
 - Login page has email-password and google login options
 - Register page has email-password and google registration options
 - Login, registration, google-login have jwt implemented with them
 - Footer has the links of site pages and social media icons