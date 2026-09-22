export class Empleado {
    _id: string;
    name: string;
    position: string;
    office: string;
    salary: number;

    constructor(
        _id: string = '',
        name: string = '',
        position: string = '',
        office: string = '',
        salary: number = 0
    ) {
        this._id = _id;
        this.name = name;
        this.position = position;
        this.office = office;
        this.salary = salary;
    }
}
