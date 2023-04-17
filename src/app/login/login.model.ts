/** Registered Employee model */
export class RegisteredEmployee {
  constructor(
    public userName: string,
    public password: string,
    public name: string,
    public lastName: string,
    public id: number,

  ) { }
}

/** Employee Credentials model */
export class EmployeeCredentials {
  constructor(
    public userName: string,
    public password: string
  ) { }
}