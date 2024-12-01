const getLists = (inputString) => {
    const column1 = [];
    const column2 = [];

    inputString
        .split('\n')
        .forEach((stringColumns) => {
            const columns = stringColumns.split('   ');
            column1.push(columns[0]);
            column2.push(columns[1]);
        } 
    );

    const lists = {
        column1: column1.sort(),
        column2: column2.sort()
    };

    return lists.column1.map((number, index) => [number, lists.column2[index]]);
}

const getDistanceBetween = (a, b) => {
    let distance = 0;

    if (a > b) {
        distance = Math.abs(a - b);
    } else {
        distance = Math.abs(b - a);
    }

    return distance;
}




const executeDay1Challenge = (input) => {
    const distances = getLists(input).map((list) => {
        return getDistanceBetween(list[0], list[1]);
    })


    return distances.reduce((accumulator, number) => {
        return  accumulator + number;
    }, 0);
}

