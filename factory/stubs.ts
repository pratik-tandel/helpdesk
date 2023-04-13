import { of } from "rxjs"
import { TICKETS } from "./api-data"

export const toastrStub = {
    success: () => { /** success **/ },
    error: () => { /** error **/ }
}

export const ticketServiceStub = {
    getTickets: () => of(TICKETS),
    deleteTicket: () => of(TICKETS[0])
}
