import { executePartOne } from "./part-1";
import { executePartTwo } from "./part-2";

export const executeDay2Challenge = (input: string, part: number) => {
    if (part === 1) return executePartOne(input);
    if (part === 2) return executePartTwo(input);

    return 'Part Not Found';
}

export const getReportsFormatted = (input: string) => {
    return input
        .trim()
        .split('\n')
        .map((report) => report.split(' ').map((level) => Number(level)));
}
