export class Post{
    data: PostData[];
    total: any;
}

export class PostData{
    owner: Owner;
    tags: string[];
    id: string;
    image: string;
    message: string;
}

export class Owner{
    id: number;
    nameTitle: string;
    firstName: string;
    lastName: string;
    image: string;
}

export class Tag{
    data: string[];
}

