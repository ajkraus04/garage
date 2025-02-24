"use client";

import { Button } from "@/components/ui/button";
import { Truck, Shield, Calculator, FileText } from "lucide-react";

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
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        variant="outline"
        className="h-auto py-6 px-4 flex flex-col items-center gap-3 border-2 shadow-sm hover:shadow-md hover:border-orange-500 hover:bg-orange-50 transition-all duration-200"
        onClick={onFreightQuote}
      >
        <div className="p-2 rounded-full bg-orange-100">
          <Truck className="h-6 w-6 text-orange-500" />
        </div>
        <span className="text-sm font-medium">Instant freight quote</span>
      </Button>

      <Button
        variant="outline"
        className="h-auto py-6 px-4 flex flex-col items-center gap-3 border-2 shadow-sm hover:shadow-md hover:border-orange-500 hover:bg-orange-50 transition-all duration-200"
        onClick={onWarrantyCalculate}
      >
        <div className="p-2 rounded-full bg-orange-100">
          <Shield className="h-6 w-6 text-orange-500" />
        </div>
        <span className="text-sm font-medium">Warranty calculator</span>
      </Button>

      <Button
        variant="outline"
        className="h-auto py-6 px-4 flex flex-col items-center gap-3 border-2 shadow-sm hover:shadow-md hover:border-orange-500 hover:bg-orange-50 transition-all duration-200"
        onClick={onFinancingQuote}
      >
        <div className="p-2 rounded-full bg-orange-100">
          <Calculator className="h-6 w-6 text-orange-500" />
        </div>
        <span className="text-sm font-medium">Financing quote</span>
      </Button>

      <Button
        variant="outline"
        className="h-auto py-6 px-4 flex flex-col items-center gap-3 border-2 shadow-sm hover:shadow-md hover:border-orange-500 hover:bg-orange-50 transition-all duration-200"
        onClick={onGetInvoice}
      >
        <div className="p-2 rounded-full bg-orange-100">
          <FileText className="h-6 w-6 text-orange-500" />
        </div>
        <span className="text-sm font-medium">Get PDF invoice</span>
      </Button>
    </div>
  );
};
