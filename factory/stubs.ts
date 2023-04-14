import { of } from "rxjs"
import { CATEGORIES, TICKETS } from "./api-data"

export const toastrStub = {
    success: () => { /** success **/ },
    error: () => { /** error **/ }
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
    navigateByUrl: () => { /** navigate by url */ }
}
