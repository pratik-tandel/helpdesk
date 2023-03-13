export class Ticket {
    constructor(
        public id: number,
        public status: string,
        public subject: string,
        public raisedBy: string,
        public assignee: string,
        public category: string,
        public updated: string
    ) { }
}

export class Category {
    constructor(
        public id: number,
        public categoryName: string
    ) { }
}