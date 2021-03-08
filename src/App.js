import styles from './App.module.css';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from "./components/Chart/Chart.jsx"
import { fetchData } from './api';
import { Component } from 'react';



class App extends Component {
  state = {
    data : {},
    country: "",
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
   this.setState({data: fetchedData})
  }

  handlerCountryChange = async (country) => {
        //Fetch the data
    if(country === "global"){
      country = "";
    }
    const fetchedData = await fetchData(country);
        //set the state
        console.log(country);
    this.setState({data: fetchedData, country:country})
  }

  render(){
    const {data, country} = this.state;

    return (
      <div className={styles.container}>
          <Cards data={data}></Cards>
          <CountryPicker handlerCountryChange={this.handlerCountryChange}></CountryPicker>
          <Chart data={data} country={country}></Chart>
      </div>
    );
  }

}

export default App;
