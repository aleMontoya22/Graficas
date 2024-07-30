import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BarChart from './Charts/BarChart';
import DoughnutChart from './Charts/DonutChart';
import PieChart from './Charts/PieChart';
import LineChart from './Charts/LineChart';
import Home from './Charts/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/line-chart">Gráfico de líneas</Link>
              </li>
              <li>
                <Link to="/bar-chart">Gráfico de barras</Link>
              </li>
              <li>
                <Link to="/doughnut-chart">Gráfico de donas</Link>
              </li>
              <li>
                <Link to="/pie-chart">Gráfico circular</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
            <Route path="/doughnut-chart" element={<DoughnutChart />} />
            <Route path="/pie-chart" element={<PieChart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
