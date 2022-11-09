export interface Employee {
    name: string;
    lastName: string;
    email: string;
}

export interface EmployeeRequest extends Employee {
    groupId: number;
    number: string;
}

export interface APIResponse<T = unknown> {
    state: boolean;
    message: string;
    code: string;
    data: T;
}

export interface EmployeeQuery extends Employee {
    code: string;
    phone: string;
}

export interface EmployeeCreationResponse {}

export interface FunctionalGroup {
    groupId: number;
    nameGroup: string;
}