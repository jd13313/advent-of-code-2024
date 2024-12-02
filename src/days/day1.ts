type SplitList = {
    left: number[],
    right: number[]
}

const getSplitLists = (inputString: string): SplitList  => {
    const listLeft: number[] = [];
    const listRight: number[] = [];

    inputString
        .trim()
        .split('\n')
        .forEach((stringColumns) => {
            const columns = stringColumns.split('   ');

            listLeft.push(Number(columns[0]));
            listRight.push(Number(columns[1]));
        } 
    );

    return {
        left: listLeft.sort(),
        right: listRight.sort()
    };
}

const executePartOne = (input: string) => {
    const lists = getSplitLists(input);
    const distances = lists.left
        .map((number, index) => {
            const a = Number(number);
            const b = Number(lists.right[index]);
        
            return Math.abs(b - a);
        }
    )

    const answer = distances.reduce((accumulator, number) => {
        return accumulator + number;
    }, 0);

    return String(answer);
}

const executePartTwo = (input: string) => {
    const lists = getSplitLists(input);

    const answer = lists.left.reduce((accumulator, currentNumber) => {
        const number = Number(currentNumber);
        const rightListCount = lists.right.filter((rightNumber) => rightNumber == number).length;

        return accumulator + (number * rightListCount);
    }, 0);

    return String(answer);
}

export const executeDay1Challenge = (input: string,  part: number) => {
    if (part == 1) return executePartOne(input);
    if (part == 2) return executePartTwo(input);

    return 'Challenge Not Found';
}