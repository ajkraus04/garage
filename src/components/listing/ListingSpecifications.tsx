import { Info } from "lucide-react";

interface Specifications {
  [key: string]: string | number;
}

interface ListingSpecificationsProps {
  specifications: Specifications;
}

export const ListingSpecifications = ({
  specifications,
}: ListingSpecificationsProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900">Specifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 rounded-lg p-6">
        {Object.entries(specifications).map(([key, value]) => (
          <div key={key} className="flex items-center gap-2">
            <Info className="h-4 w-4 text-orange-500" />
            <span className="text-gray-600 capitalize">
              {key.replace(/([A-Z])/g, " $1").trim()}:
            </span>
            <span className="font-medium text-gray-900">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
