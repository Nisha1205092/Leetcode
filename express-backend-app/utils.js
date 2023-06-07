import fs from 'fs';
import path from 'path';

const __dirname = '/Users/aminarahman/Desktop/Leetcode/express-backend-app';
const usersFilePath = path.join(__dirname, 'users.json');

export const readUsersFromFile = () => {
    try {
        const fileContent = fs.readFileSync(usersFilePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Function to write users to the JSON file
export const writeUsersToFile = (users) => {
    const usersJSON = JSON.stringify(users, null, 4);
    fs.writeFileSync(usersFilePath, usersJSON);
}