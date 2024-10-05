# User Dashboard - React.js Project

This project is a simple *User Dashboard* built using *React.js*. The dashboard fetches and displays user data and activities from a REST API. The project demonstrates basic React functionality, including component structure, API integration, and responsive design.

## Project Setup

### Prerequisites

To run this project, make sure you have the following installed:

- *Node.js*: v14 or later
- *npm* or *yarn*: For managing dependencies
- *React*: v17 or later

### Installation

1. *Clone the repository:*
   bash
   git clone git@github.com:chippySebastian/Dasboard.git
   
   
2. *Navigate to the project folder:*
   bash
   cd dashboard
   

3. *Install dependencies:*
   bash
   npm install
   

4. *Run the project:*
   bash
   npm start
   

The project will start on http://localhost:3000/ by default.


### Pages/Endpoints

- *Homepage (Dashboard)*: The main dashboard fetches and displays user data and activities.
  - *Endpoint*: /
  - *Description*: Displays user profile details and user activities.

- *User Profile Component*: Displays the basic information of a user.
  - *Data Source*: [jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)

- *User Activities Component*: Displays a list of activities (posts) for the user.
  - *Data Source*: [jsonplaceholder.typicode.com/posts?userId=1](https://jsonplaceholder.typicode.com/posts?userId=1)

### API Endpoints

We use the following public mock API endpoints from [JSONPlaceholder](https://jsonplaceholder.typicode.com):

- *User Data*: https://jsonplaceholder.typicode.com/users/1
  - Fetches user details like name, email, phone, and website.
  
- *User Activities*: https://jsonplaceholder.typicode.com/posts?userId=1
  - Fetches a list of posts (activities) for the user.



### Commands

- *Start the development server*: npm start
- *Build for production*: npm run build
- *Run ESLint*: npm run lint

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, feel free to contact the repository owner.