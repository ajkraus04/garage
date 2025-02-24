"use client";

import {
  Building2,
  Calendar,
  Gauge,
  Ruler,
  ArrowUpDown,
  Scale,
  Droplets,
  CheckCircle2,
  FileCheck,
  ShieldAlert,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Specifications {
  [key: string]: string | number;
}

interface ListingSpecificationsProps {
  specifications: Specifications;
}

const SPEC_CONFIG: Record<string, { icon: LucideIcon; label: string }> = {
  make: { icon: Building2, label: "Make" },
  year: { icon: Calendar, label: "Year" },
  mileage: { icon: Gauge, label: "Mileage" },
  length: { icon: Ruler, label: "Length" },
  height: { icon: ArrowUpDown, label: "Height" },
  weight: { icon: Scale, label: "Weight" },
  tankSize: { icon: Droplets, label: "Tank Size" },
  pumpTest: { icon: CheckCircle2, label: "Pump Test" },
  serviceRecords: { icon: FileCheck, label: "Service Records" },
  rust: { icon: ShieldAlert, label: "Rust" },
};

export const ListingSpecifications = ({
  specifications,
}: ListingSpecificationsProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900">Specifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 rounded-lg p-6">
        {Object.entries(specifications).map(([key, value]) => {
          const config = SPEC_CONFIG[key] || { icon: Building2, label: key };
          const Icon = config.icon;

          return (
            <div key={key} className="flex items-center gap-2">
              <Icon className="h-5 w-5 text-orange-500 flex-shrink-0" />
              <div className="flex gap-2">
                <span className="text-gray-600">{config.label}:</span>
                <span className="font-medium text-gray-900">{value}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
