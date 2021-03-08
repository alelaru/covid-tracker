import styles from './App.module.css';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from "./components/Chart/Chart.jsx"
import { fetchData } from './api';
import { Component } from 'react';



class App extends Component {
  state = {
    data : {},
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
   this.setState({data: fetchedData})
  }

  render(){
    const {data} = this.state;

    return (
      <div className={styles.container}>
          <Cards data={data}></Cards>
          <CountryPicker></CountryPicker>
          <Chart></Chart>
      </div>
    );
  }

}

export default App;
