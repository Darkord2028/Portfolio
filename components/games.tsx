"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { gamesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function GamesProjects() {
  const { ref } = useSectionInView("Games", 0.2);

  return (
    <section ref={ref} id="games" className="scroll-mt-28 mb-28">
      <SectionHeading>Games</SectionHeading>

      <div className="mt-6 flex flex-col items-center gap-8">
        {gamesData.map((game, index) => {
          return (
            <div key={index} className="w-full max-w-[50rem]">
              <Project
                title={game.title}
                description={game.description}
                tags={game.tags}
                imageUrl={game.imageUrl}
              />

              {game.playUrl && (
                <div className="mt-4 flex justify-center">
                  <a
                    href={game.playUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-red-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                  >
                    Play on Itch.io
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
