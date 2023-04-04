/* Employee model */
export class Employee {
  constructor(
    public name: string,
    public lastName: string,
    public userName: string,
    public password: string,
    public confirmPassword: string,
    public id: number
  ) { }
}

/* SidebarMenu model */
export class SidebarMenu {
  constructor(
    public text: string,
    public link: string,
    public className: string
  ) { }
}

