import { Header } from "@/components/layout/Header";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ListingDetails } from "@/components/listing/ListingDetails";
import { notFound } from "next/navigation";

interface ApiResponse {
  result: {
    listing: {
      id: string;
      createdAt: string;
      updatedAt: string;
      listingTitle: string;
      sellingPrice: number;
      imageUrls: string[];
      listingStatus: number;
      tags: string[];
      categories: number[];
      itemBrand: string;
      listingDescription: string;
      itemAge: number;
      itemLength: number;
      itemWidth: number;
      itemHeight: number;
      itemWeight: number;
      addressPrimary: string;
      addressSecondary: string;
      addressCity: string;
      addressZip: string;
      addressState: string;
      mileage: number;
      hasServiceRecords: boolean;
      hasRust: boolean;
      isFourWheelDrive: boolean | null;
      tankSize: number;
      pumpSize: number | null;
      hasPumpTest: boolean;
      aerialLength: number | null;
      isAuction: boolean | null;
      expirationDate: string | null;
      finalPrice: number | null;
      vin: string | null;
      userId: string;
      user: {
        id: string;
        email: string;
      };
    };
  };
  error: string;
}

function transformListingData(apiResponse: ApiResponse) {
  const { listing } = apiResponse.result;

  return {
    id: listing.id,
    title: listing.listingTitle,
    price: listing.sellingPrice,
    location: `${listing.addressCity}, ${listing.addressState}`,
    images: listing.imageUrls,
    isVerified: listing.hasServiceRecords,
    description: listing.listingDescription,
    categories: listing.categories,
    specifications: {
      make: listing.itemBrand,
      year: listing.itemAge,
      mileage: `${listing.mileage} miles`,
      length: `${listing.itemLength} inches`,
      height: `${listing.itemHeight} inches`,
      weight: `${listing.itemWeight} lbs`,
      tankSize: `${listing.tankSize} gallons`,
      pumpTest: listing.hasPumpTest ? "Verified" : "Not Available",
      serviceRecords: listing.hasServiceRecords ? "Available" : "Not Available",
      rust: listing.hasRust ? "Present" : "None",
    },
    sellerInfo: {
      location: `${listing.addressCity}, ${listing.addressState}`,
      email: listing.user.email,
    },
    listedDate: listing.createdAt,
  };
}

async function getListing(id: string) {
  try {
    const response = await fetch(
      "https://garage-backend.onrender.com/getListing",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
        next: {
          revalidate: 60,
        },
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        notFound();
      }
      throw new Error(`Failed to fetch listing: ${response.statusText}`);
    }

    const data: ApiResponse = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    return transformListingData(data);
  } catch (error) {
    console.error("Error fetching listing:", error);
    throw error;
  }
}

interface ListingPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ListingPageProps) {
  try {
    const listing = await getListing(params.id);
    return {
      title: `${listing.title} | Garage`,
      description: listing.description,
      openGraph: {
        title: listing.title,
        description: listing.description,
        images: listing.images,
      },
    };
  } catch {
    return {
      title: "Listing Not Found | Garage",
      description: "The requested listing could not be found.",
    };
  }
}

export default async function ListingPage({ params }: ListingPageProps) {
  const listing = await getListing(params.id);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-[100%] mx-auto">
          <Link
            href="/listings"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-orange-500 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to listings
          </Link>

          <ListingDetails listing={listing} />
        </div>
      </main>
    </div>
  );
}
