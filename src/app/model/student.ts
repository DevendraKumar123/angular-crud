export class StudentModel {
    stdid: number;
    name: string;
    city: string;
    state: string;
    email: string;
    contact: string;
    address: string;
    pincode: string;
    constructor() {
        this.stdid = 0;
        this.name = "";
        this.city = "";
        this.state = "";
        this.email = "";
        this.contact = "";
        this.pincode = "";
        this.address = "";
    }
}
