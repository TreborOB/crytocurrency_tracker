import userModel from "./api/users/userModel";

const users = [
    {
        "username": "User 1",
        "password": "Password 1"
    },
    {
        "username": "User 2",
        "password": "Password 2"
    }
];

export const loadUsers = () => {
    userModel.find({}).remove(() => {
        users.forEach((user) => {
            userModel.create(user, (err, docs) => {
                    if (err) {
                        console.log(`failed to Load User Data: ${err}`);
                    }
                }
            );
        });
        console.info(`${users.length} users were successfully stored.`);
    });
};