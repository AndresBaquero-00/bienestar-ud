
export interface EmployeeRequest {
    groupId:number;
    name: string;
    lastName: string;
    number: string;
    email: string;
}

export interface APIResponse<T> {
    state: boolean;
    message?: string;
    data:T;
}

export interface EmployeeCreationResponse{

}

export interface FunctionalGroup{
    groupId:number;
    nameGroup:string;
}