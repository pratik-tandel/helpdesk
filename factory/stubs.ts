import { of } from "rxjs"
import { CATEGORIES, EMPLOYEES, REGISTRATION_FORM, TICKETS, TICKET_FORM, USER_DETAILS } from "./api-data"

export const toastrStub = {
    success: () => { /** success **/ },
    error: () => { /** error **/ }
}

export const authServiceStub = {
    getUserDetails: (): string | null => JSON.stringify(USER_DETAILS),
    setUserDetails: () => { /** set user details */ },
    logoutUser: () => { /** logut user */ }
}

export const ticketServiceStub = {
    getTickets: () => of(TICKETS),
    getTicketById: () => of(TICKETS[0]),
    addTicket: () => of(TICKETS[0]),
    editTicket: () => of(TICKETS[0]),
    deleteTicket: () => of(TICKETS[0]),
    getCategories: () => of(CATEGORIES)
}

export const routerStub = {
    navigateByUrl: () => { /** navigate by url */ },
    navigate: () => { /** navigate */ }
}

export const TICKET_FORMGROUP = {
    valid: true,
    value: TICKET_FORM
}

export const REGISTRATION_FORMGROUP = {
    valid: true,
    value: REGISTRATION_FORM
}

export const registrationServiceStub = {
    addEmployee: () => of(EMPLOYEES[0]),
    getRegisteredEmployees: () => of(EMPLOYEES)
}

export const loginServiceStub = {
    getRegisteredEmployees: () => of(EMPLOYEES)
}