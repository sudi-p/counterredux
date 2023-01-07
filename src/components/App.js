
import './App.css';
import { useState } from 'react';
import { connect } from 'react-redux';
import addCounterAction, {subtractCounterAction, addCounterByAction} from '../actions/counterActions';

function App(props) {
  const {
    counter,
    addCounterAction: addCounter,
    subtractCounterAction: subtractCounter,
    addCounterByAction: addCounterBy,
  } = props;
  const [ num, setNum ] = useState(0)
  const { count } = counter;
  return (
    <div className="counterWrapper">
      <div className="counterDisplay">
        {count}
      </div>
      <div className="counterButtons">
        <div onClick={addCounter} className="counterButton">
          +
        </div>
        <div onClick={subtractCounter} className="counterButton">
          -
        </div>
        <div onClick={() => addCounterBy(parseInt(num, 10))} className="counterButton">
          Increment by <input onChange={e => setNum(e.target.value)} value={num} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter,
})

export default connect(mapStateToProps, {addCounterAction, subtractCounterAction, addCounterByAction})(App);
