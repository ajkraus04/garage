"use client";

import { Button } from "@/components/ui/button";

interface SellerInfo {
  location: string;
  email: string;
}

interface ListingContactProps {
  sellerInfo: SellerInfo;
  onCall: () => void;
  onEmail: () => void;
}

export const ListingContact = ({
  sellerInfo,
  onCall,
  onEmail,
}: ListingContactProps) => {
  return (
    <div className="border-t pt-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Contact Seller
      </h2>
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="mb-4">
          <p className="text-gray-600">{sellerInfo.location}</p>
        </div>
        <div className="flex gap-4">
          <Button
            className="flex-1 bg-orange-500 hover:bg-orange-600"
            onClick={onCall}
          >
            Call Seller
          </Button>
          <Button className="flex-1" variant="outline" onClick={onEmail}>
            Email Seller
          </Button>
        </div>
      </div>
    </div>
  );
};
