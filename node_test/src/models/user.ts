import * as bcrypt from "bcryptjs";

export default class User implements IUser{
  email: string = '';
  username: string = '';
  password: string = '';

  comparePassword = (candidatePassword: string): Promise<boolean> => {
    console.log('inside comparepassword');
    let password = this.password;
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, password, (err, success) => {
          if(success) {
            resolve(success);
          } else {
            reject(err);
          }
        });
    });
  }

  // comparePassword = (candidatePassword: string): Promise<boolean> => {
  //   console.log('inside comparepassword');
  //   let password = this.password;
  //   return new Promise((resolve, reject) => {
  //       bcrypt.compare(candidatePassword, password, (err, success) => {
  //           console.log('inside bcrypt compare: ' + success);
  //           if(success) {
  //             return resolve(success);
  //           }
  //           return reject(err);
  //       });
  //   });
  // };
}

export interface IUser {
  username: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}