import logo from './logo.svg';
import './App.css';
import BarChart from './Charts/BarChart';
import DoughnutChart from './Charts/DonutChart';
import PieChart from './Charts/PieChart';
import LineChart from './Charts/LineChart';

function App() {
  return (
   <div className='App'>
    <h1>Gráficas de criptomonedas</h1>
    <DoughnutChart/>
   </div>
  );
}

export default App;
