const { User, item } = require(".models");

User.create({
    firstName: 'Eric',
    lastName: 'Nielsen',
    age: 56,
    email: 'email@email.com'
})

    .catch(function (error) {
        console.log(error);
    });


Item.create({
    fitemTitle: 'X32 Mixer',
    itemDescription: '32 Channel Audio Mixer',
    itmCost: 1250,
    itemQuantity: '15'
})

    .catch(function (error) {
        console.log(error);
    });