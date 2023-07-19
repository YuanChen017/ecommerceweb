export const emailReg =
  /^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|\"[a-zA-Z0-9.+!% -]{1,64}\")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$/;

export const personalProjectApi = {
  users: {
    "yuanc710@gmail.com": {
      email: "yuanc710@gmail.com",
      password: "1111111",
    },
    "user2@gmail.com": {
      email: "user2@gmail.com",
      password: "user2",
    },
  },
  signIn({ email, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!email || !this.users[email] || !emailReg.test(email)) {
          reject({
            message: "User is not existed !",
            status: false,
          });
        } else if (this.users[email].password !== password) {
          reject({ message: "Password is not correct !", status: false });
        } else {
          resolve({
            json() {
              return Promise.resolve({
                message: "Login succeed",
                status: true,
              });
            },
          });
        }
      }, 1000);
    });
  },
  signUp({ email, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!email || !emailReg.test(email)) {
          reject({
            message: "Email is not valid !",
            status: false,
          });
        } else if (!password) {
          reject({
            message: "Password is not valid !",
            status: false,
          });
        } else if (this.users[email]) {
          reject({
            message: "User is existed !",
            status: false,
          });
        } else {
          this.users[email] = {
            email,
            password,
          };
          resolve({
            json() {
              return Promise.resolve({
                message: "Sign up succeed",
                status: true,
              });
            },
          });
        }
      }, 1000);
    });
  },
  emailcheck({ email }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!email || !this.users[email] || !emailReg.test(email)) {
          reject({
            message: "User is not existed !",
            status: false,
          });
        } else {
          resolve({
            json() {
              return Promise.resolve({
                message: "send mail succeed",
                status: true,
              });
            },
          });
        }
      }, 1000);
    });
  },
};
