import { useState, useEffect } from 'react';
import Card from './components/Card';
import { apiCall } from './helpers/api';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const res = async () => {
      const data = await apiCall();
      setData(data);
    };
    res();
  }, []);

  const filteredData = () => {
    return data.slice(currentPage, currentPage + 5);
  };

  const nextData = () => {
    setCurrentPage(currentPage + 5);
  };

  const prevData = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 5);
    }
  };

  return (
    <>
      <span>Photos</span>
      {filteredData().map((value) => (
        <Card value={value} />
      ))}
      <button onClick={prevData}>Previuos</button>
      <button onClick={nextData}>Next</button>
    </>
  );
}

export default App;
