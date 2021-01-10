import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form className="widget-form">
      <div>
        <img className="form-image form-spacing" src="https://miro.medium.com/max/1400/1*MI686k5sDQrISBM6L8pf5A.jpeg"></img>
      </div>
      <div>
        <input className="form-spacing" type="text" name="name" placeholder="Enter Email" />
      </div>
      <div className="form-spacing">
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default App;
