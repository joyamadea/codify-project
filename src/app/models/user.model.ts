export class Comment{
    data: CommentData[];
}

export class CommentData{
    owner: UserData;
    id: number;
    message: string;
    post: number;
}

export class User{
    data: UserData[];
}

export class UserData{
    id: number;
    nameTitle: string;
    firstName: string;
    lastName: string;
    image: string;
}

export class UserDetail{
    id: number;
    gender: string;
    location: Location;
    email: string;
    dob: Date;
    phone: string;
    cell: string;
    image: string;
    firstName: string;
    lastName: string;
    nameTitle: string;
    username: string;
    password: string;
}

export class Location{
    street: string;
    city: string;
    state: string;
    postcode: number;
    timezone: string;
}