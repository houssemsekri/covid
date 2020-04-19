import React, { createContext, useState, useEffect } from "react";
export const DataContext = createContext();
function DataContextProvider({ children }) {
  const [data, setdata] = useState({});
  const [dailyData, setdailyData] = useState([]);
  const [Contries, setContries] = useState([]);
  const [contry, setcontry] = useState();
  const handleChangeContry = async (e) => {
    setcontry(e.target.value);
  };
  useEffect(() => {
    let url = "https://covid19.mathdro.id/api";
    let data;
    async function fetchData(contry) {
      if (contry) {
        url = `https://covid19.mathdro.id/api/countries/${contry}`;
      }
      const json = await fetch(url);
      data = await json.json();
      setdata({ ...data });
    }
    fetchData(contry);
  }, [data]);
  useEffect(() => {
    let url = "https://covid19.mathdro.id/api/daily";
    async function fetchDailyData() {
      const json = await fetch(url);
      const daily = await json.json();
      setdailyData(daily);
    }
    fetchDailyData();
  }, [dailyData]);
  useEffect(() => {
    let url = "https://covid19.mathdro.id/api/countries";
    async function fetchContries() {
      const json = await fetch(url);
      const contries = await json.json();

      const newcontries = contries.countries.map((e) => {
        return e.name;
      });
      setContries(newcontries);
    }
    fetchContries();
  }, [Contries]);
  return (
    <DataContext.Provider
      value={{ data, dailyData, Contries, handleChangeContry, contry }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
