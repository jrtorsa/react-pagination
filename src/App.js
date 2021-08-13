import { useState, useEffect } from 'react';
import Card from './components/Card';
import { apiCall } from './helpers/api';
import { paginate } from './helpers/utils';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const res = async () => {
      const data = await apiCall();
      setData(data);
    };
    res();
  }, []);

  return (
    <>
      <span>Photos</span>
      {data.map((value, index) => (
        <Card value={value} />
      ))}
    </>
  );
}

export default App;
