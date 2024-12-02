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
                <select id="day-select">
                    <option value="1-1">Day 1, Part 1</option>
                    <option value="1-2">Day 1, Part 2</option>
                </select>
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