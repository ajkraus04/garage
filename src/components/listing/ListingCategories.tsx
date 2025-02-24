"use client";

import { Badge } from "@/components/ui/badge";

// Map category IDs to their names
const CATEGORY_MAP: Record<number, string> = {
  1: "Engines and Pumpers",
  2: "Ladders, Aerials, and Quints",
  5: "Ambulances",
  6: "Command Units",
  7: "Brush Trucks and Minis",
  8: "Tankers and Tenders",
  9: "Other Apparatus",
  10: "Helmets",
  12: "Adapters and Valves",
  13: "Fire Apparatus Parts",
  14: "Radios and Electronics",
  15: "SCBAs",
  16: "Turnout Gear",
  17: "Hand Tools",
  19: "Nozzles",
  20: "Hose",
  21: "Other Equipment",
  22: "Uniforms and Clothing",
  23: "Boots",
  25: "Firefighter Straps",
  27: "EMS Equipment",
  29: "Handlights",
  30: "Scene Lighting",
  31: "Wildland Vehicles",
  1001: "Fire Trucks",
  1002: "Firefighting Equipment",
};

interface ListingCategoriesProps {
  categories: number[];
}

export const ListingCategories = ({ categories }: ListingCategoriesProps) => {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-3">
        {categories.map((categoryId) => (
          <Badge
            key={categoryId}
            variant="secondary"
            className="px-2  text-base bg-orange-100 text-orange-700 hover:bg-orange-200"
          >
            {CATEGORY_MAP[categoryId] || `Category ${categoryId}`}
          </Badge>
        ))}
      </div>
    </div>
  );
};
