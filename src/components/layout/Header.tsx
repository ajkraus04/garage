import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import GarageLogo from "../../../public/garage.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <Image
              src={GarageLogo}
              alt="Garage Logo"
              width={100}
              height={100}
            />
          </Link>

          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search listings..."
                className="pl-10"
              />
            </div>
          </div>

          <nav className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/listings">Browse listings</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/start-selling">Start selling</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/login">Log in</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
