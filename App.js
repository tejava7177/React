import {useState} from 'react';
import Button from './Button';
import Board from './Board';
import './App.css';

function random(n){
    return Math.ceil(Math.random() * n);
}


function App(){

    // const [num, setNum] = useState(1);
    // const [sum, setSum] = useState(0);
    const [myHistory, setMyHistory] = useState([]);

    // const [otherNum, setOtherNum] = useState(1);
    // const [otherSum, setOtherSum] = useState(0);
    const [otherHistory, setOtherHistory] = useState([]);

    const handleRollClick = () => {
        const nextMyNum = random(6);
        const nextOtherNum = random(6);
        
        setMyHistory([...myHistory, nextMyNum]);
        
        setOtherHistory([...otherHistory, nextOtherNum]);
    };

    const handleClearClick = () => {
        setMyHistory([]);
        setOtherHistory([]);
    };

    return (
        <div className="App">
            <div>
                <Button className="App-button" color="blue" onClick = {handleRollClick}> 던지기 </Button>
                <Button className="App-button" color="red" onClick = {handleClearClick}> 처음부터 </Button>
             </div>
            <div>
                <Board name = "사용자" color = "blue"  gameHistory = {myHistory}/>
                <Board name = "컴퓨터" color = "red"  gameHistory = {otherHistory}/>
            </div>
        </div>
    );
}

export default App;

