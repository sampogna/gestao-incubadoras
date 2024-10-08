export class Auth {
    username: string;
    password: string;
}

export interface IUser {
    name: string;
    email: string;
    incubatorCoreId: number;
    type: UserTypes;
}

export enum UserTypes {
    Normal,
    Advanced
}