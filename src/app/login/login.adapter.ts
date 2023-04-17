import { Employee } from "../core/model/common.model";
import { RegisteredEmployee } from "./login.model";

export class LoginAdapter {

    public toResponse(items: Employee[]): RegisteredEmployee[] {
        return items.map((item: Employee) => {
            const registeredEmployee: RegisteredEmployee = new RegisteredEmployee(
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
