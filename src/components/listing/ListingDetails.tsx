"use client";

import { ListingGallery } from "@/components/listing/ListingGallery";
import { ListingHeader } from "@/components/listing/ListingHeader";
import { ListingSpecifications } from "@/components/listing/ListingSpecifications";
import { ListingContact } from "@/components/listing/ListingContact";
import { ListingDescription } from "@/components/listing/ListingDescription";
import { ListingActions } from "@/components/listing/ListingActions";
import { ListingVirtualTour } from "@/components/listing/ListingVirtualTour";
import { ListingCategories } from "@/components/listing/ListingCategories";
import {
  handleShare,
  handleSave,
  handleCall,
  handleEmail,
  handleSubmitOffer,
  handleFreightQuote,
  handleWarrantyCalculate,
  handleFinancingQuote,
  handleGetInvoice,
  handleScheduleCall,
} from "@/utils";

interface ListingDetailsProps {
  listing: {
    id: string;
    title: string;
    price: number;
    location: string;
    images: string[];
    isVerified: boolean;
    description: string;
    specifications: Record<string, string | number>;
    categories: number[];
    sellerInfo: {
      location: string;
      email: string;
    };
    listedDate: string;
  };
}

export const ListingDetails = ({ listing }: ListingDetailsProps) => {
  return (
    <div className="max-w-[90%] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        <div className="hidden lg:flex flex-col h-full">
          <div className="flex-grow space-y-8">
            <ListingGallery images={listing.images} title={listing.title} />
            <ListingActions
              onFreightQuote={handleFreightQuote}
              onWarrantyCalculate={handleWarrantyCalculate}
              onFinancingQuote={handleFinancingQuote}
              onGetInvoice={handleGetInvoice}
            />
            <ListingVirtualTour onScheduleCall={handleScheduleCall} />
          </div>
        </div>

        <div className="flex flex-col h-full">
          <div className="flex-grow space-y-8">
            <ListingHeader
              title={listing.title}
              price={listing.price}
              location={listing.location}
              isVerified={listing.isVerified}
              listedDate={listing.listedDate}
              onShare={handleShare}
              onSave={handleSave}
              onSubmitOffer={handleSubmitOffer}
            />

            {/* Below I added to handle mobile view to order more relevant */}
            <div className="block lg:hidden">
              <ListingGallery images={listing.images} title={listing.title} />
            </div>

            <ListingDescription description={listing.description} />

            <ListingSpecifications specifications={listing.specifications} />

            <ListingCategories categories={listing.categories} />

            <ListingContact
              sellerInfo={listing.sellerInfo}
              onCall={handleCall}
              onEmail={handleEmail}
            />

            <div className="block lg:hidden space-y-8">
              <ListingActions
                onFreightQuote={handleFreightQuote}
                onWarrantyCalculate={handleWarrantyCalculate}
                onFinancingQuote={handleFinancingQuote}
                onGetInvoice={handleGetInvoice}
              />
              <ListingVirtualTour onScheduleCall={handleScheduleCall} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
