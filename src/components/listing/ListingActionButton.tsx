"use client";

import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ListingActionButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

export const ListingActionButton = ({
  icon: Icon,
  label,
  onClick,
}: ListingActionButtonProps) => {
  return (
    <Button
      variant="outline"
      className="h-auto py-6 px-4 flex flex-col items-center gap-3 border-2 shadow-sm hover:shadow-md hover:border-orange-500 hover:bg-orange-50 transition-all duration-200"
      onClick={onClick}
    >
      <div className="p-2 rounded-full bg-orange-100">
        <Icon className="h-6 w-6 text-orange-500" />
      </div>
      <span className="text-sm font-medium">{label}</span>
    </Button>
  );
};
