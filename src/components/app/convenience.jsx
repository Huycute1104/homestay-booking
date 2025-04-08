"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bath,
  Car,
  MapPin,
  Refrigerator,
  Shield,
  Tv,
  Wifi,
  Wind,
  AppWindowIcon as Window,
} from "lucide-react";

export function LocationAmenities() {
  const nearbyLocations = [
    {
      name: "710 Trần Cao Vân, Xuân Hà, Thanh Khê, Đà Nẵng, Việt Nam",
      highlight: "Cách biển 5p đi bộ",
    },
    { name: "Gần bãi biển Nguyễn Tất Thành" },
    { name: "Sân bay quốc tế Đà Nẵng" },
    { name: "Gần cầu Rồng" },
  ];

  const amenities = [
    { icon: Refrigerator, label: "Tủ lạnh" },
    { icon: Wifi, label: "Wifi" },
    { icon: Bath, label: "WC riêng" },
    { icon: Shield, label: "Bảo vệ" },
    { icon: Window, label: "Cửa sổ" },
    { icon: Car, label: "Chỗ để xe" },
    { icon: Wind, label: "Máy lạnh" },
    { icon: Tv, label: "Tivi" },
  ];

  return (
    <div className="space-y-4">
      <Card className="flex flex-col justify-start shadow-lg border rounded-2xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Trong khu vực</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {nearbyLocations.map((location, index) => (
            <div key={index} className="flex gap-2">
              <MapPin className="w-5 h-5 shrink-0 mt-1" />
              <div>
                <p className="text-sm">{location.name}</p>
                {location.highlight && (
                  <Badge
                    variant="secondary"
                    className="mt-1 bg-blue-50 text-blue-700 hover:bg-blue-50"
                  >
                    {location.highlight}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="flex flex-col justify-start shadow-lg border rounded-2xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Tiện ích</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-y-4 gap-x-6">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="text-sm text-gray-700">{amenity.label}</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
