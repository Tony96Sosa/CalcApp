/* eslint no-eval: 0*/
import React, { useState } from 'react';
import Result from './components/Result';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Numbers from './components/Numbers';
import './App.css';

const App = () => {
    const [value, setValue ] = useState("");
    const onClickOperation= operation => {
        console.log('Operacióm', operation);
        setValue(`${value}${operation}`);
    }
    const onClickEqual= (equal) => {
        console.log('Igual', equal);
        setValue(eval(value).toString());
    }
    const onContentClear= () => {
        console.log('Clear');
        setValue("");
    }
    const onDelete= () => {
        if(value.length>0){
            console.log('Delete');
            const newValue = value.substring(0, value.length-1);
            setValue(newValue);
        }
    }
    const onClickNumber= (number) => {
        console.log('Numero', number);
        setValue(`${value}${number}`);
    }

    return (
        <main className="react-calculator">
            <Result num={value} />
            <Numbers onClickNumber={ onClickNumber }
            />
            <Functions 
            onContentClear={ onContentClear }
            onDelete={ onDelete }
            />
            <MathOperations 
            onClickOperation={ onClickOperation }
            onClickEqual={ onClickEqual }
            />
        </main>
    )
}

export default App;