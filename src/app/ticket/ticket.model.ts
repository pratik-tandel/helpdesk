export class Ticket {
    constructor(
        public ticketId: number,
        public status: string,
        public subject: string,
        public raisedBy: string,
        public assignee: string,
        public category: string,
        public updated: string
    ) { }
}