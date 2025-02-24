"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Video } from "lucide-react";

interface ListingVirtualTourProps {
  onScheduleCall: () => void;
}

export const ListingVirtualTour = ({
  onScheduleCall,
}: ListingVirtualTourProps) => {
  return (
    <Card className="border-2 border-orange-200 shadow-lg">
      <CardHeader>
        <CardTitle>Request a virtual walk around</CardTitle>
        <CardDescription>
          Want to see this listing on a video call? Request a virtual inspection
          to schedule a time to speak with the owner.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          className="w-full h-12 gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-md hover:shadow-lg transition-all"
          onClick={onScheduleCall}
        >
          <Video className="h-5 w-5" />
          Schedule video call
        </Button>
      </CardFooter>
    </Card>
  );
};
