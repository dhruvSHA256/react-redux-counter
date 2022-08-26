import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
    // useSelector function is used to get some date from the store
    // it takes a callback function which in which the whole state is passed
    // it should return the data from state which is in need
    const counter = useSelector((state) => state.counter);
    const addBy = useSelector((state) => state.addBy);

    // useDispatch function help us to dispatch an action and the action is processed by
    // the reducer function, modifying the state of the program
    const dispatch = useDispatch();

    // handleOnclick dispatch an action based on the button clicked
    const handleOnclick = (event) => {
        switch (event.currentTarget.name) {
            case "increment":
                dispatch({ type: "INC", payload: addBy });
                break;
            case "decrement":
                dispatch({ type: "DEC", payload: addBy });
                break;
            default:
                return;
        }
    }

    const handleOnchange = (event) => {
        switch (event.currentTarget.name) {

            case "addBy":
                const payload = (event.currentTarget.value.length === 0) ? 1
                    : parseInt(event.currentTarget.value, 10);
                dispatch({ type: "ADDBY", payload });
                break;
            default:
                return;
        }
    }

    return (
        <div className="App">
            <h1>Counter</h1>
            <h2> {counter}</h2>
            <input name="addBy" defaultValue={addBy} onChange={handleOnchange} />
            <button name='increment' onClick={handleOnclick}>Increment</button>
            <button name='decrement' onClick={handleOnclick}>Decrement</button>
        </div>
    );
}

export default App;
