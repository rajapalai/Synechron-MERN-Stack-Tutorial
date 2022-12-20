const request = require('request');
const fs = require('fs');

request('http://reqres.in/api/users?page=1', function (err, response, body) {
    if (err) {
        console.error(`Could not send request to API: ${err.message}`);
        return;
    }
    if (response.statusCode != 200) {
        console.error(`Expected status code 200 but recieved ${response.statusCode}`);
        return;
    }
    let usersList = '';
    let users = JSON.parse(body);
    users.data.forEach(user => {
        usersList += `${user['id']}, ${user['email']}\n`;
    });
    fs.writeFile(`callbackUsers.txt`, usersList, function (err) {
        if (err) {
            console.error(`Could not send request to API: ${err.message}`);
            return;
        }
        console.log(`Users list written to callbackUsers.txt succefully`);
    });
})