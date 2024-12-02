import { executeDay1Challenge } from "./days/day1.ts";

export const executeChallenge = () => {
    const challengeSelected = (<HTMLInputElement>document.getElementById('day-select'))?.value ?? 1;
    const inputValue = (<HTMLInputElement>document.getElementById('input-field'))?.value;
    const outputField = <HTMLInputElement>document.getElementById('output-field');

    const challenge = challengeSelected.split('-');
    let outputValue = '';

    switch(challenge[0]) {
        case '1':
            outputValue = executeDay1Challenge(inputValue, Number(challenge[1]));
            break;
        default:
            outputValue = 'Select A Challenge';
            break;
    }

    outputField.value = outputValue;
}

const challenges = [
    {
        label: 'Day 1, Part 1',
        id: '1-1',
        url: 'https://adventofcode.com/2024/day/1',
    },
    {
        label: 'Day 1, Part 2',
        id: '1-2',
        url: 'https://adventofcode.com/2024/day/1',
    },
]

const challengeOptions = challenges.map((challenge) => {
    return `<option value="${challenge.id}">${challenge.label}</option>`;
})

const updateChallengeLink = (event: Event) => {
    const selectedChallengeId = (event.target as HTMLSelectElement)?.value ?? '1-1';
    const selectedChallenge = challenges.find((challenge) => challenge.id === selectedChallengeId);
    document.querySelector<HTMLAnchorElement>('#view-challenge')?.setAttribute('href', selectedChallenge?.url ?? '');
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="wrapper">
        <div>
            <h1>Advent of Code 2024</h1>
            <a href="https://duenas.dev">Jeremy Duenas</a> | 
            <a href="https://github.com/jd13313/advent-of-code-2024" target="_blank">Source Code</a>
        </div>
    </div>
    <div class="wrapper">
        <div id="top-bar">
            
            <div class="dropdown-wrapper">
                <h2>Select Challenge: </h2>
                <select id="challenge-select">
                    ${challengeOptions}
                </select>
                <a href="${challenges[0]?.url}" target="_blank" id="view-challenge">View Challenge</a>
            </div>
        </div>
        <div id="input-wrapper">
            <h2>Add Input:</h2>
            <textarea id="input-field"></textarea>
            <button id="submit">GO</button>
        </div>
    </div>
   
    <div class="wrapper">
        <h2>Observe Output:</h2>
        <textarea id="output-field" readonly></textarea>
    </div>
`;

document.querySelector<HTMLButtonElement>('#submit')?.addEventListener('click', executeChallenge);
document.querySelector<HTMLSelectElement>('#challenge-select')?.addEventListener('change', updateChallengeLink);