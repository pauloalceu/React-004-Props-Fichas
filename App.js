import './App.css';
import Ficha from './components/ficha'; 

function App() {

    return (
    <div className="App">
      <Ficha nome="Paulo" idade="41" profissao="Programador" foto="https://lh4.googleusercontent.com/5ehs8ZW8bWMI0jEKPCl5E7UvbDfPtAY4MsI7yIkNc4EZncOZkIKIkNHo6zHwzrQQne6vRdbPFabImjCkabu8_bmuajp2jeEiIhU2N789R-6iqzJr=w1280"/>
      <Ficha nome="João" idade="55" profissao="Pedreiro" foto=""/>      
    </div>
  );
}

export default App;
