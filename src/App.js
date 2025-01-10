import './App.css';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='mainHeading'>
        <h1>ToDo List</h1>
      </div>
      <div className='subHeading'>
        <h2>Whoops, I dump it here</h2>
      </div>
      <div className='input'>
      <input type="text" placeholder="🖊️ Add item..." />
      <i className="fas fa-plus"></i>
      </div>
      <div className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>React learning</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>

    </div>


  );
}

export default App;
