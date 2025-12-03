"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { ProjectMedia } from "@/lib/data";

export default function ProjectMediaGallery({
  media,
}: {
  media?: ProjectMedia[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!media || media.length === 0) return null;

  return (
    <div className="mt-4 w-full">
      <div
        className="
          mx-auto
          flex
          max-w-[50rem]
          gap-3
          overflow-x-auto
          pb-2
        "
      >
        {media.map((item, index) => (
          <button
            key={index}
            onClick={() => setOpenIndex(index)}
            className="
              relative
              min-w-[160px]
              aspect-video
              shrink-0
              rounded-lg
              overflow-hidden
              border
              bg-black
              hover:opacity-80
              transition
            "
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt="thumb"
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-xl">
                ▶
              </div>
            )}
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/20 backdrop-blur"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="relative w-[90%] max-w-4xl aspect-video rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenIndex(null)}
              className="absolute top-2 right-2 z-10 bg-black/80 text-white px-4 py-1 rounded-lg hover:bg-black"
            >
              ✕
            </button>

            {media[openIndex].type === "image" ? (
              <Image
                src={media[openIndex].src}
                alt="fullscreen"
                fill
                className="object-contain bg-black"
              />
            ) : (
              <iframe
                src={media[openIndex].src}
                className="w-full h-full"
                allowFullScreen
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
