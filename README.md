Client:

To run the frontend part just do npm install or npm i 
Then, after installing node_modules , do npm run dev


Server:

To run the backend part, first get the mongodb connection string
Do npm install or npm i for node_modules.
Create an .env file in root folder of server folder and create a Variable MONGODB and paste that mongodb connection string
Example: MONGODB=mongodb+srv://USER_NAME:USER_PASSWORD@cluster0.ampg58a.mongodb.net/ecommerce
just replace USERNAME and Password with your crdential and url remains same.

then run node seed.js to initally add some data to db
then run npm start
