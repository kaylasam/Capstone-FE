export interface ITopComments {
    id: number;
    comment: string;
    rating: string;
}

export interface ITopPost {
    id: number;
    NumberOfComments: string;
    PostText: string
    TopComments: {
        [key: string]: ITopComments
    };
}