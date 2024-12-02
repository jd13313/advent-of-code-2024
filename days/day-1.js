const getSplitLists = (inputString) => {
    const listLeft = [];
    const listRight = [];

    inputString
        .trim()
        .split('\n')
        .forEach((stringColumns) => {
            const columns = stringColumns.split('   ');

            listLeft.push(columns[0]);
            listRight.push(columns[1]);
        } 
    );

    return {
        left: listLeft.sort(),
        right: listRight.sort()
    };
}

const executePartOne = (input) => {
    const lists = getSplitLists(input);
    const distances = lists.left
        .map((number, index) => {
            const a = number;
            const b = lists.right[index];

            if (a > b) return Math.abs(a - b);
            
            return Math.abs(b - a);
        }
    )

    return distances.reduce((accumulator, number) => {
        return accumulator + number;
    }, 0);
}

const executePartTwo = (input) => {
    const lists = getSplitLists(input.trim());

    return lists.left.reduce((accumulator, number) => {
        const rightListCount = lists.right.filter((rightNumber) => rightNumber == number).length;

        return accumulator + (number * rightListCount);
    }, 0);
}

const executeDay1Challenge = (input,  part) => {
    if (part == 1) return executePartOne(input);
    if (part == 2) return executePartTwo(input);
}