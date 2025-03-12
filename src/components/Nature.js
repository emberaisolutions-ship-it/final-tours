import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Nature = ({ selectedRegion }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  // Updated region images using external URLs
  const regionImages = {
    "Lake Nakuru National Park": [
      "https://lh3.googleusercontent.com/p/AF1QipMvKJIeAjMK4I_Z6ht2Ixd3poou2P_OaxGk9vp0=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipMIAKSlMrfaOTKYcWUd5e4k0wrjKQCbQF5Bz1hy=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipN91ghoLGziIkKeNDVwtjM-3Yv--AoLpdHzgBkm=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipPbm--i3QSzNWT9zuca73nWz3xZCF2ZVRET2m8g=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipPW8NPmz41gvvUvSUnac60k0arm5kFo-rYcJd06=s680-w680-h510",
    ],
    "Mount Kenya": [
      "data:image/jpeg;base64,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",
      "https://media.istockphoto.com/id/515161366/photo/sunrise-behind-mt-kenya.jpg?s=612x612&w=0&k=20&c=HholJet9EY-s9c4Fst7iF8TetXVvuUNHoUp5DnHZV_M=",
      "https://t3.ftcdn.net/jpg/03/05/95/26/360_F_305952635_cWrCbUh6qFBA84yIOh5Boip5U1yHR2Bt.jpg",
      "https://t3.ftcdn.net/jpg/03/87/79/54/360_F_387795431_LQGMSE6l3FgNeA6QR4ahgOahXK9BUf1f.jpg",
      "https://media.istockphoto.com/id/644336098/photo/sunrise-from-the-summit-of-mt-kenya.jpg?s=612x612&w=0&k=20&c=T5xSiTZDaef2_dkpYeWwATXnKTT-Fq6jHrAhfu9rbMA=",
    ],
    "Maasai Mara": [
      "https://lh3.googleusercontent.com/p/AF1QipPgQlwLw0UQS-t-beTcjufkZrE4cUlLc4QOGiGs=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipPaVHZ-qNh76pNjuKxAdgUEhZnsjLd7Nnng5vhn=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipPFvcjyRDtIMT0dn2tophnNCcRFuvGTUaEX-M3d=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipMN5b7C7_xZrt1hDaYMVPpQMqAeIB2B6cx0YwEi=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipPUaES7976xZGgg_4iqtWCQ1ppDGHTjS3HKMsQ8=s680-w680-h510",
    ],
    "Kenyan Coast": [
      "https://media.istockphoto.com/id/607281390/photo/beach-with-palms-in-kenya.jpg?s=612x612&w=0&k=20&c=5ymMIGxTWDnqxP-1o8pGwSmXiTR6JGY0BZiruqmjmgc=",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0F7btc5G_D2bDhJqdlygWkuaW-JMinPuUw&s",
      "https://media.istockphoto.com/id/1145686378/photo/amazing-diani-beach-seascape-kenya.jpg?s=612x612&w=0&k=20&c=QqW73bpXUGAvCXsIl6JxxtgBANXOPiXQaCbJ7kE8Qjc=",
      "https://www.travelbutlers.com/images/largeheaders1400/regions/The-Kenyan-Coast.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF_LqduSn4KKHnjzLQI4xbqt8HNdLhjRYCDA&s",
    ],
    "Nairobi National Park": [
      "https://lh3.googleusercontent.com/p/AF1QipMy4tV8ATED9G3VZ-PSqGNWwFy21dX0GRvn2-o=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipNZdkEq_P87Teo87sVaZwysIqdWMTWYHuwt_XAT=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipNl2yo6ymKNOF5F-ZVUaBWEiPP0FTT4xx59ZYk=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipMJOdDRe62rWAhwTyEYpozbeMc0GmVDPfxq4yuz=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipPy7aiCNkNE_1cbtQDMcEqxAMi3WKPzhWmHPqnW=s680-w680-h510",
    ],
    "Amboseli National Park": [
      "https://lh3.googleusercontent.com/p/AF1QipPNjRidxtAKQtPMX5F9mXL7gRPwYUt5awXGy-Mm=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipMMV0octERCvr1lQeTG8pO4PG-mLV7d8TH0GfH-=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipP5GzAgwNDGcqeke5QKvuBDAszh-eYTp9WVQl__=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipOlaBRwlFS3olKc7s3fVGkQV0Zug8rhqK6fq78T=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipMmTirz1xr7FYV8b0eR3iHNT23AqcQw58jSizjp=s680-w680-h510",
    ],
    "Olpejeta Conservancy": [
      "https://lh3.googleusercontent.com/p/AF1QipPxpUDaOqMdgryyA0FBd57OSkc9wETrfYPoMDRs=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipOV3w3It_MU5Chf7Zpw45LK0bGfumEv2D-EDDGE=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipPGPeN7rS6iRudmZtbk6WRDVSUo7W7gKPX2xP-V=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipO0R7OhIkRdx2BDVno4YECRHNV8qGj1tg1s0qYE=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipMgNQDdf6olK2IvBf-Oe3HueIZqq4SgWn-OiscF=s680-w680-h510",
    ],
  };

  const updatedSelectedRegion = selectedRegion
    ? {
        ...selectedRegion,
        images: regionImages[selectedRegion.name] || selectedRegion.image,
      }
    : null;

  const nextImage = () => {
    setActiveImageIndex((prev) =>
      prev === updatedSelectedRegion.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? updatedSelectedRegion.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Discover Kenya's Nature and Landscapes
      </h1>

      {updatedSelectedRegion && (
        <div className="space-y-6">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                {updatedSelectedRegion.description}
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {updatedSelectedRegion.images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => {
                  setActiveImageIndex(index);
                  setShowLightbox(true);
                }}
              >
                <img
                  src={image}
                  alt={`${updatedSelectedRegion.name} - Image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {showLightbox && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
              <div className="relative max-w-4xl w-full">
                <button
                  onClick={() => setShowLightbox(false)}
                  className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors z-50"
                >
                  <X className="w-8 h-8" />
                </button>

                <img
                  src={updatedSelectedRegion.images[activeImageIndex]}
                  alt={`${updatedSelectedRegion.name} - Image ${
                    activeImageIndex + 1
                  }`}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />

                <div className="absolute inset-y-0 left-0 flex items-center justify-center w-16">
                  <button
                    onClick={previousImage}
                    className="text-white hover:text-orange-500 transition-colors"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center justify-center w-16">
                  <button
                    onClick={nextImage}
                    className="text-white hover:text-orange-500 transition-colors"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Nature;
