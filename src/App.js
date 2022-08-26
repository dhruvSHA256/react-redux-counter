import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
    // useSelector function is used to get some date from the store
    // it takes a callback function which in which the whole state is passed
    // it should return the data from state which is in need
    const counter = useSelector((state) => state.counter);

    // useDispatch function help us to dispatch an action and the action is processed by
    // the reducer function, modifying the state of the program
    const dispatch = useDispatch();

    // handleOnclick dispatch an action based on the button clicked
    const handleOnclick = (event) => {
        switch (event.currentTarget.name) {
            case "increment":
                dispatch({ type: "INC", payload: 1 });
                break;
            case "decrement":
                dispatch({ type: "DEC", payload: 1 });
                break;
            default:
                return;
        }
    }

    return (
        <div className="App">
            <h1>Counter</h1>
            <h2> {counter}</h2>
            <button name='increment' onClick={handleOnclick}>Increment</button>
            <button name='decrement' onClick={handleOnclick}>Decrement</button>
        </div>
    );
}

export default App;
