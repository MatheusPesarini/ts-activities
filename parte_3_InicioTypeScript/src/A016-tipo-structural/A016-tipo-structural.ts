type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string, password: string};

const verifyUser: VerifyUserFn = (user, sentValue) => {
    return user.username === sentValue.username && user.password === sentValue.password;
}

const bdUser = { username: 'jv', password: '1234' };
const sentUser = { username: 'jv', password: '1234' };
console.log(verifyUser(bdUser, sentUser)); // true