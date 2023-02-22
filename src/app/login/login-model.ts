/* typecast the RegisteredUser */
export class RegisteredUser {
  constructor(
    public userName: string,
    public password: string,
    public name: string,
    public lastName: string,
    public id: number,

  ) { }
}

export class LoginEmployees {
  constructor(
    public userName: string,
    public password: string,
  ) { }
}