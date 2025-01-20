import React, { useEffect, useState } from "react";
import axios from "axios";
import SpendingTime from "./components/SpendingTime";
import IncomeComparison from "./components/IncomeComparsion";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [networth, setNetworth] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cdn.jsdelivr.net/gh/komed3/rtb-api@main/api/profile/elon-musk/latest"
        );
        setData(response.data);
        setNetworth(response.data.networth);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  if (!data) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Elon Musk's Net Worth: ${Math.round(networth).toLocaleString()}M
      </h1>

      <div className="space-y-6">
        <SpendingTime networth={networth} />
        <IncomeComparison networth={networth} />
      </div>
    </div>
  );
};

export default App;
