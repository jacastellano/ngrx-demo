
export enum Feeling {
    HORRIBLE = 1,
    BAD = 2,
    NORMAL = 3,
    WELL = 4,
    EXCELENT = 5
}

export enum ActivityType {
    ART = 1,
    FAMILY = 2,
    HOUSEWORK = 3,
    JOB = 4,
    LEARNING = 5,
    OTHER = 6,
    SELF_IMPROVEMENT = 7,
    SOCIAL = 8,
    SPORT = 9,
}

export interface Activity {
    id?: number;
    title: string;
    description: string;
    type: ActivityType;
    expectedDuration: number;
    date: Date;
    realDuration?: number;
    feeling?: Feeling;
    perceivedExertion?: number;
}
