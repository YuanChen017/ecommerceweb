export const discountcode = {
  codes: ["A111", "A222", "A333"],
  codecheck(code) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!this.codes.includes(code)) {
          reject({ message: "discountcode is not valid" });
        } else {
          resolve({
            message: "valid",
            value: 20,
          });
        }
      }, 1000);
    });
  },
};
