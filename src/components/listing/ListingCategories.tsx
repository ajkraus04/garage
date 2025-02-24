"use client";

import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";

// Map category IDs to their names
const CATEGORY_MAP: Record<number, string> = {
  1: "Engines and Pumpers",
  1001: "Fire Trucks",
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
