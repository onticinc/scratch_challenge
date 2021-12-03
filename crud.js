const { User } = require(".models");

User.create({
    firstName: 'Eric',
    lastName: 'Nielsen',
    age: 56,
    email: 'email@email.com'
})

    .catch(function (error) {
        console.log(error);
    });