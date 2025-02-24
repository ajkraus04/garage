import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Share, Heart } from "lucide-react";

interface ListingCardProps {
  title: string;
  price: number;
  location: string;
  images: string[];
  isVerified: boolean;
  onShare: () => void;
  onSave: () => void;
}

export const ListingCard = ({
  title,
  price,
  location,
  images,
  isVerified,
  onShare,
  onSave,
}: ListingCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0 relative">
        <div className="relative h-64 w-full">
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full bg-white/80 backdrop-blur-sm"
            onClick={onShare}
          >
            <Share className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full bg-white/80 backdrop-blur-sm"
            onClick={onSave}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 p-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          {isVerified && (
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Verified
            </Badge>
          )}
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-2xl font-bold">${price.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground">{location}</span>
        </div>
      </CardFooter>
    </Card>
  );
};
