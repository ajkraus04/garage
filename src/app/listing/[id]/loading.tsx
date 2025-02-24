import { Header } from "@/components/layout/Header";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

export default function ListingLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <Link
          href="/listings"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-orange-500 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Skeleton className="aspect-video w-full rounded-lg" />
            <div className="grid grid-cols-3 gap-4">
              <Skeleton className="aspect-video rounded-lg" />
              <Skeleton className="aspect-video rounded-lg" />
              <Skeleton className="aspect-video rounded-lg" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <Skeleton className="h-10 w-[300px]" />
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-32" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <Skeleton className="h-10 w-10 rounded-full" />
                </div>
              </div>
              <Skeleton className="h-10 w-32" />
            </div>

            <div className="space-y-3">
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-24 w-full" />
            </div>

            <div className="space-y-4">
              <Skeleton className="h-8 w-40" />
              <div className="grid grid-cols-2 gap-4">
                {[...Array(8)].map((_, i) => (
                  <Skeleton key={i} className="h-8 w-full" />
                ))}
              </div>
            </div>

            <div className="border-t pt-8">
              <Skeleton className="h-8 w-40 mb-4" />
              <div className="space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-6 w-32" />
                </div>
                <div className="flex gap-4">
                  <Skeleton className="h-10 flex-1" />
                  <Skeleton className="h-10 flex-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
