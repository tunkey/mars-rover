import React, { useState } from 'react';
import {Mars, outputRovers} from './Mars';

const initialCommands = [
    '5 5',
    '1 2 N',
    'LMLMLMLMM',
    '3 3 E',
    'MMRMMRMRRM'
];

const PlateauPanel = () => {

    const [command,setCommand] = useState('');
    const [commands,setCommands] = useState(initialCommands);
    const [commandResult,setCommandResult] = useState([]);

    const handleCommandChange = (event) => {
        setCommand(event.target.value);
    }

    const handleAddCommandList = (_command) => {
        setCommands(prevState => prevState.concat(_command));
    }

    const clearCommandList = (clearCommandList) => {
        setCommands([]);
    }    

    // TODO : Validate commands order and regex
    const handleExecuteCommands = (_commands) => {
        setCommandResult(Mars(_commands));
    }

    const showCommandList = () => {
        return commands.map((com,index) => <li key={index.toString()}>{com}</li>)
    }

    return (
        <div>
                <h1>Command Panel</h1>
                <br />
                <input type='text' value={command} onChange={event => handleCommandChange(event)}  />
                <button onClick={() => handleAddCommandList(command)}>Add Command List</button>
                <button onClick={clearCommandList}>Clear</button>
                <div>{showCommandList()}</div>
                <br />
                <br />
                <button onClick={() => handleExecuteCommands(commands)}>Execute Commands</button>
                <div>{outputRovers(commandResult)}</div>
        </div>
    )

}

export default PlateauPanel;