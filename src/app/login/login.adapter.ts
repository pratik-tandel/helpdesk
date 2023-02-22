import { Employee } from "../core/component/model/common.model";
import {  RegisteredUser } from "../login/login-model";
export class LoginAdapter {

    public toResponse(items: Employee[]): RegisteredUser[] {
        // const registeredEmployee: RegisteredUser = new RegisteredUser(
        //     item.userName,
        //     item.password
        // )
        // return registeredEmployee;
        return items.map((item: Employee) => {
            const registeredEmployee: RegisteredUser = new RegisteredUser(
                item.userName,
                item.password,
                item.name,
                item.lastName,
                item.id,
            )
            return registeredEmployee;
        })

    }
  
}
