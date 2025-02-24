"use client";

import { Truck, Shield, Calculator, FileText } from "lucide-react";
import { ListingActionButton } from "./ListingActionButton";

interface ListingActionsProps {
  onFreightQuote: () => void;
  onWarrantyCalculate: () => void;
  onFinancingQuote: () => void;
  onGetInvoice: () => void;
}

export const ListingActions = ({
  onFreightQuote,
  onWarrantyCalculate,
  onFinancingQuote,
  onGetInvoice,
}: ListingActionsProps) => {
  const actions = [
    {
      icon: Truck,
      label: "Instant freight quote",
      onClick: onFreightQuote,
    },
    {
      icon: Shield,
      label: "Warranty calculator",
      onClick: onWarrantyCalculate,
    },
    {
      icon: Calculator,
      label: "Financing quote",
      onClick: onFinancingQuote,
    },
    {
      icon: FileText,
      label: "Get PDF invoice",
      onClick: onGetInvoice,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {actions.map((action) => (
        <ListingActionButton
          key={action.label}
          icon={action.icon}
          label={action.label}
          onClick={action.onClick}
        />
      ))}
    </div>
  );
};
