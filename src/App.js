import styles from './App.module.css';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from "./components/Chart/Chart.jsx"

function App() {
  return (
    <div className={styles.container}>
        <Cards></Cards>
        <CountryPicker></CountryPicker>
        <Chart></Chart>
    </div>
  );
}

export default App;
