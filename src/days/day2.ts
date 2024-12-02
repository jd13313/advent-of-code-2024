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

const executePartOne = (input: string) => {
    const reports = input
        .trim()
        .split('\n')
        .map((report) => report.split(' ').map((level) => Number(level)));

    const safeReports = reports.filter((levels) => {
        return levelHasTrend(levels, 'increase') || levelHasTrend(levels, 'decrease');
    })

    return safeReports.length;
}



const executePartTwo = (input: string) => {

}


export const executeDay2Challenge = (input: string, part: number) => {
    if (part === 1) return executePartOne(input);
    if (part === 2) return executePartTwo(input);
}