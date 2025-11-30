"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { gamesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function GamesProjects() {
  const { ref } = useSectionInView("Games", 0.2);

  return (
    <section
      ref={ref}
      id="games"
      className="scroll-mt-28 mb-28"
    >
      <SectionHeading>Game Projects</SectionHeading>

      <div>
        {gamesData.map((project, index) => {
          const { playUrl, ...projectProps } = project;

          return (
            <div key={index} className="mb-10">
              <Project {...projectProps} />

              {playUrl && (
                <div className="mt-4 flex justify-center">
                  <a
                    href={playUrl}
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
