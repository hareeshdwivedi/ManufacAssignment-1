import './App.css';
import TableComponent from './table.tsx';
import React from "react"
import { getStats } from './utility.tsx';
import data from './Wine-Data.json'
function App() {
  const flavanoidsStats = getStats(data, 'Flavanoids');
  const alcoholClasses = Object.keys(flavanoidsStats.mean);
  const gammStates = getStats(data, "Gamma");
  const gammaClasses = Object.keys(gammStates.mean);
  return (
    <div className="App">
      <section>
        <h1>class-wise mean, median, mode of “Flavanoids”</h1>
        <TableComponent alcoholClasses={alcoholClasses} subject='Flavanoids' stats={flavanoidsStats}></TableComponent>
      </section>
      <section>
        <h1>class-wise mean, median, mode of Gamma</h1>
        <TableComponent alcoholClasses={gammaClasses} subject='Gamma' stats={gammStates}></TableComponent>
      </section>
    </div>
  );
}

export default App;
