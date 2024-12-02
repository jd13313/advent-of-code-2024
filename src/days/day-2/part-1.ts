import { getReportsFormatted } from "./shared";


const levelHasTrend = (levels: number[], direction: 'increase' | 'decrease') => {
    return levels.every((level: number, index: number) => {
        const previousNumber = levels[index - 1];
        const previousDiff = Math.abs(level - previousNumber);
        const isDiffWithinLimits = previousDiff >= 1 && previousDiff <= 3;

        if (direction === 'increase') {
            return index === 0 || (level > previousNumber && isDiffWithinLimits)
        } else {
            return index === 0 || (level < previousNumber && isDiffWithinLimits);
        }
    });
}

export const executePartOne = (input: string) => {
    const reports = getReportsFormatted(input);

    const safeReports = reports.filter((levels: number[]) => {
        return levelHasTrend(levels, 'increase') || levelHasTrend(levels, 'decrease');
    })

    return String(safeReports.length);
}