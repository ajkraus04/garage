import { Header } from "@/components/layout/Header";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ListingNotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <Link
          href="/listing"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-orange-500 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to listings
        </Link>

        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Listing Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the listing you're looking for.
          </p>
          <Link
            href="/listings"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            Browse other listings
          </Link>
        </div>
      </main>
    </div>
  );
}
