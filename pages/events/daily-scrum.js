import React from "react";
import path from "../../util/filepath.JSON";
import Breadcrumb from "../../util/Breadcrumb";

export default function DailyScrum() {
  const pages = [path[0], path[1], path[4], path[6]];
  return (
    <div className="flex flex-col justify-center items-center">
      <Breadcrumb pages={pages} />

      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                EVENTS
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Daily Scrum Meeting
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              What is a stand-up in scrum? In many sports like (American)
              football and rugby, the team huddles before each play. The huddle
              is strategic: it keeps the team informed, connected, and
              calibrated throughout the game. For software teams, the stand-up
              is like the team’s huddle. It’s even commonly known as the daily
              scrum, and reinforces “we” to keep everyone aware of the team’s
              landscape and progress.
            </p>

            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
              <blockquote>
                <p>
                  Said another way, a stand-up is a daily meeting that involves
                  the core team: product owners, developers, and the scrum
                  master. This meeting’s flavor is unique to each team, usually we use
                  three simple questions to generate structure:
                </p>
              </blockquote>
              <ul role="list">
                <li>What did I work on yesterday?</li>
                <li>What am I working on today?</li>
                <li>What issues are blocking me?</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p>
              These questions highlight progress and help flag team blockers.
              Also, it strengthens the team when everyone shares the progress
              they’re contributing to the team. The daily reinforcement of
              sharing individual successes and plans keeps everyone excited
              about the team’s overall contribution to the organization. At the
              individual level, it’s important to walk into the day's stand-up
              knowing what you’re going to say. It keeps the energy of the
              stand-up high and everyone engaged. Individuals use
              Jira boards to keep on top of their projects with quick filters.
              Two great filters that can be used together to help prepare for
              stand-up are “only my issues” and “recently updated.” When these
              two filters are used together, they show the issues assigned to
              you and that have been updated in the last day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
