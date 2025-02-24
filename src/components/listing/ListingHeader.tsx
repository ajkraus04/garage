"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share, Heart, MapPin, Calendar } from "lucide-react";
import { ListingOffer } from "./ListingOffer";

interface ListingHeaderProps {
  title: string;
  price: number;
  location: string;
  isVerified: boolean;
  listedDate: string;
  onShare: () => void;
  onSave: () => void;
  onSubmitOffer: (amount: number) => void;
}

export const ListingHeader = ({
  title,
  price,
  location,
  isVerified,
  listedDate,
  onShare,
  onSave,
  onSubmitOffer,
}: ListingHeaderProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
          <div className="flex items-center gap-3 mt-2">
            {isVerified && (
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-700 hover:bg-green-200"
              >
                Verified
              </Badge>
            )}
            <div className="flex items-center text-gray-500">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:text-orange-500"
            onClick={onShare}
          >
            <Share className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:text-orange-500"
            onClick={onSave}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <p className="text-4xl font-bold text-orange-500">
          ${price.toLocaleString()}
        </p>
        <ListingOffer onSubmitOffer={onSubmitOffer} />
      </div>
      <div className="text-sm text-gray-500">
        <Calendar className="h-4 w-4 inline mr-1" />
        Listed {new Date(listedDate).toLocaleDateString()}
      </div>
    </div>
  );
};
