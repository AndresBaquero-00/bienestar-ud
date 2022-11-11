export interface Employee {
    name: string;
    lastName: string;
    email: string;
}

export interface EmployeeRequest extends Employee {
    groupId: number | string;
    number: number | string;
}

export interface EmployeeQuery extends Employee {
    code: number | string;
    phone: number | string;
}

export interface APIResponse<T = unknown> {
    state: boolean;
    message: string;
    code: string;
    data: T;
}

export interface FunctionalGroup {
    groupId: number | string;
    nameGroup: string;
}