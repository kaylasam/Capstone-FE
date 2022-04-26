export interface ITopComments {
    id: number;
    comment: string;
    polarity: number;
}

export interface ITopPostAnalyses {
    good: string;
    neutral: string;
    bad: string;
}

export interface ITopPost {
    id: number;
    NumberOfComments: string;
    PostText: string;
    NumberOfUpvotes: string;
    TopComments: [{
        id: number;
        comment: string;
        polarity: number;
    }];
    TopPostAnalyses: {
        good: string;
        neutral: string;
        bad: string;
    };
}