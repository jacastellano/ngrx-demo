
export enum Feeling {
    HORRIBLE = 1,
    BAD = 2,
    NORMAL = 3,
    WELL = 4,
    EXCELENT = 5
}

export interface Activity {
    id?: number;
    title: string;
    description: string;
    expectedDurantion: number;
    date: Date;
    realDuration?: number;
    feeling: Feeling;
    perceivedExertion: number;
}
