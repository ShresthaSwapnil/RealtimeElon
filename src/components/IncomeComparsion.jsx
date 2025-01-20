import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

const IncomeComparison = ({ networth }) => {
  const [yearlyIncome, setYearlyIncome] = useState(50000);

  const calculateTimeToReach = () => {
    if (yearlyIncome <= 0) return "∞";
    const years = (networth * 1000000) / yearlyIncome;
    return Math.floor(years).toLocaleString();
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Income Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Your Yearly Income ($)
            </label>
            <Input
              type="number"
              value={yearlyIncome}
              onChange={(e) => setYearlyIncome(Number(e.target.value))}
              className="w-full"
              min="0"
            />
          </div>
          <div className="mt-4">
            <p className="text-lg">At your current income, it would take:</p>
            <p className="text-2xl font-bold mt-2">
              {calculateTimeToReach()} years
            </p>
            <p className="text-sm text-gray-500 mt-2">
              to reach ${networth.toLocaleString()} million
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IncomeComparison;
