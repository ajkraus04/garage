"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface ListingDescriptionProps {
  description: string;
  previewLines?: number;
}

export const ListingDescription = ({
  description,
  previewLines = 3,
}: ListingDescriptionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const lines = description.split(/\n/).filter((line) => line.trim() !== "");
  const hasMore = lines.length > previewLines;
  const previewText = lines.slice(0, previewLines).join("\n");

  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold text-gray-900">Description</h2>

      <div className="text-gray-600">
        <p className="whitespace-pre-line leading-relaxed">
          {previewText}
          {hasMore && "..."}
        </p>

        {hasMore && (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="mt-2 text-orange-500 hover:text-orange-600 p-0 h-auto font-medium flex items-center gap-1"
              >
                Show more
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md w-[90%] p-6">
              <DialogHeader>
                <DialogTitle className="text-xl text-gray-900">
                  Description
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4 max-h-[60vh] overflow-y-auto pr-2">
                <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                  {description}
                </p>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};
