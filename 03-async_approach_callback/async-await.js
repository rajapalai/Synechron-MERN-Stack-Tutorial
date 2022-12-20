const axios = require('axios');
const fs = require('fs').promises;

async function getUsers() {
    try {
        let response = await axios.get('http://reqres.in/api/users?page=1');
        let usersList = '';
        response.data.data.forEach(user => {
           usersList += `${user['id']}, ${user['email']}\n`;
        })
        await fs.writeFile('asyncAwaitUsers.txt', usersList);
    } catch (error) {
        console.error(`Could not send request to API: ${error.message}`)
    }
}
getUsers();