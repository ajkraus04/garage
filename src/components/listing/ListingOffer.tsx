"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";

interface ListingOfferProps {
  listingPrice: number;
  onSubmitOffer: (amount: number) => void;
}

export const ListingOffer = ({
  listingPrice,
  onSubmitOffer,
}: ListingOfferProps) => {
  const [offerAmount, setOfferAmount] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    const amount = parseFloat(offerAmount);
    if (!isNaN(amount) && amount > 0) {
      onSubmitOffer(amount);
      setIsSubmitted(true);

      // I put this here just to reset for mocking it
      setTimeout(() => setIsSubmitted(false), 2000);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Input
        type="number"
        placeholder="Enter offer amount"
        value={offerAmount}
        onChange={(e) => setOfferAmount(e.target.value)}
        className="w-32"
        min={1}
        step="0.01"
      />
      <Button
        onClick={handleSubmit}
        disabled={isSubmitted || !offerAmount}
        className="bg-orange-500 hover:bg-orange-600"
      >
        {isSubmitted ? <Check className="h-4 w-4" /> : "Make Offer"}
      </Button>
    </div>
  );
};
