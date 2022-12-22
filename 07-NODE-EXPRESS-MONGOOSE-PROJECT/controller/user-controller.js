const User = require('../model/urer-model')

module.exports.getAllUser = (req, res) => {
    console.log('Get All User service start')
    User.find(function (error, users) {
        if (error)
            res.status(500).send(`Error : ${error.message}`)
        res.send(users)
        console.log(users)
        console.log('Get All User service end')
    })
}

module.exports.getUserById = (req, res) => {
    console.log('Get User By Id service start')
    User.findById(req.params.id, function (error, user) {
        if (error)
            res.status(500).send(`User not found with this Id.`)
        res.send(user)
        console.log(user)
        console.log('Get User By Id service end')
    })
}

module.exports.AddNewUser = (req, res) => {
    console.log('Add User service start')
    const newUser = new User(req.body);
    newUser.save(function (error) {
        if (error)
            res.status(500).send(`Error: ${error.message}`)
        res.send(newUser)
        console.log('Add User service end')
    })
}

module.exports.UpdateUserById = (req, res) => {
    console.log('Update User By Id service start')
    const updateUser = User.findByIdAndUpdate(req.params.id, req.body, function (error) {
        if (error)
            res.status(500).send(`Error: ${error.message}`)
        res.send(`User update successfully`)
        console.log('Update User By Id service end')
    })
}

module.exports.DeleteUserById = (req, res) => {
    console.log('Delete User By Id service start')
    User.findByIdAndDelete(req.params.id, function (error) {
        if (error)
            res.status(500).send(`Error: ${error.message}`)
        res.send('User deleted successfully')
        console.log('Delete User By Id service end')
    })
}