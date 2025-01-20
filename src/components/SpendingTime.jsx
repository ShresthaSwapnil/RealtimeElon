import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calculator } from "lucide-react";

const SpendingTime = ({ networth }) => {
  const calculateDays = () => {
    const millionPerDay = 1;
    const days = networth / millionPerDay;
    const years = days / 365;

    return {
      days: Math.floor(days),
      years: Math.floor(years),
    };
  };

  const timeToSpend = calculateDays();

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-6 h-6" />
          Time to Spend
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg">Spending $1 million every day, it would take:</p>
        <div className="mt-4 text-2xl font-bold">
          <p>{timeToSpend.days.toLocaleString()} days</p>
          <p>or approximately {timeToSpend.years.toLocaleString()} years</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingTime;
