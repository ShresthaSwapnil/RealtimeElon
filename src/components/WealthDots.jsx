import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const WealthDots = ({ networth }) => {
  const dotsPerRow = 100;
  const dotValue = 1; // Each dot represents $1M
  const totalDots = Math.floor(networth / dotValue);

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Wealth Visualization</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Each dot represents $1 million</p>
        <div className="w-full overflow-auto max-h-96">
          <div className="flex flex-wrap gap-0.5">
            {Array.from({ length: totalDots }).map((_, index) => (
              <div
                key={index}
                className="w-1 h-1 bg-blue-500 rounded-full"
                title={`$${index + 1} million`}
              />
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Total: ${totalDots.toLocaleString()} million
        </p>
      </CardContent>
    </Card>
  );
};

export default WealthDots;
