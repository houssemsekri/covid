import React from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import ContryPicker from "./components/CountryPicker/ContryPicker";
import Chart from "./components/Chart/Chart";
import DataContextProvider from "./contexts/DataContext";
import coronaImage from "./images/image.png";
function App() {
  return (
    <DataContextProvider>
      <div className={styles.container}>
        <img src={coronaImage} alt="coronaImage" className={styles.image} />
        <Cards />
        <ContryPicker />
        <Chart />
      </div>
    </DataContextProvider>
  );
}

export default App;
