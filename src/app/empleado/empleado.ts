export class Empleado {
    id: number;
    employee_name: string;
    employee_salary: number;
    employee_age: number;
    profile_image: string;

    constructor(id: number, employee_name: string, employee_salary: number, employee_age: number, profile_image: string) {
        this.id = id;
        this.employee_name = employee_name;
        this.employee_salary = employee_salary;
        this.employee_age = employee_age;
        this.profile_image= profile_image;
    }
}
