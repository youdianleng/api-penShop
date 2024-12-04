import { Exclude } from "class-transformer";

export interface User {}


export interface createUser{
    name: String;
    password: String;
    email: String;
    role: number;
    active: number;
}

export class serializer{
    name: String;

    @Exclude()
    password: String;

    constructor(partial: Partial<serializer>){
        Object.assign(this,partial);
    }
}