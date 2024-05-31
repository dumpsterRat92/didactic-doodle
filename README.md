# E-commerce Back End
This project involves building the back end for an e-commerce site using Express.js API and Sequelize to interact with a MySQL database. The goal is to provide a functional back end that allows for easy management of products, categories, and tags.

## User Story
As a manager at an internet retail company, I want a back end for my e-commerce website that uses the latest technologies so that my company can compete with other e-commerce companies.

## Acceptance Criteria
###Database Connectivity: Upon adding the database name, MySQL username, and MySQL password to an environment variable file, the application should connect to the database using Sequelize.

### Database Initialization: When schema and seed commands are executed, a development database should be created and seeded with test data.

### Server Initialization: After invoking the application, the server should start, and the Sequelize models should be synced to the MySQL database.

### GET Routes: Opening API GET routes in Insomnia Core for categories, products, or tags should display the data for each route in a formatted JSON.

### POST, PUT, DELETE Routes: Testing API POST, PUT, and DELETE routes in Insomnia Core should allow for successful creation, update, and deletion of data in the database.

## Database Models
The database should contain the following models:

1. Category:

id: Integer, primary key, auto increment
category_name: String, doesn't allow null values
2. Product:

id: Integer, primary key, auto increment
product_name: String, doesn't allow null values
price: Decimal, doesn't allow null values, validates decimal
stock: Integer, doesn't allow null values, default value of 10, validates numeric
category_id: Integer, references category model's id
3. Tag:

id: Integer, primary key, auto increment
tag_name: String, doesn't allow null values
4. ProductTag:

id: Integer, primary key, auto increment
product_id: Integer, references product model's id
tag_id: Integer, references tag model's id
5. Associations
The following relationships should be established between models:

Product belongs to Category, and Category has many Product models.
Product belongs to many Tag models, and Tag belongs to many Product models.

## Getting Started
Install dependencies: npm install
Set up MySQL database using schema.sql file in the db folder.
Create environment variable file (.env) and add database credentials.
Run seed command: npm run seed
Start the server: npm start

## Video Walkthrough

### [Link to Video Walkthrough](https://drive.google.com/file/d/1mJzhkcN6Oqn2rtuRPzCISc25GUK0Tzs9/view)

## Contributing
Contributions are welcome! Please create a new branch for any feature or bug fix and submit a pull request for review.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
