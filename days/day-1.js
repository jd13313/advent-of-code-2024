const getSplitLists = (inputString) => {
    const listLeft = [];
    const listRight = [];

    inputString
        .split('\n')
        .forEach((stringColumns) => {
            const columns = stringColumns.split('   ');
            listLeft.push(columns[0]);
            listRight.push(columns[1]);
        } 
    );

    const lists = {
        left: listLeft.sort(),
        right: listRight.sort()
    };

    return lists.left.map((number, index) => [number, lists.right[index]]);
}

const executeDay1Challenge = (input) => {
    const distances = getSplitLists(input.trim()).map((list) => {
        const a = list[0];
        const b = list[1];

        if (a > b) return Math.abs(a - b);
        
        return Math.abs(b - a);
    })

    return distances.reduce((accumulator, number) => {
        return accumulator + number;
    }, 0);
}

