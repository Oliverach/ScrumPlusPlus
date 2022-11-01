import React from "react";
import path from "../../util/filepath.JSON";
import Breadcrumb from "../../util/Breadcrumb";

export default function Sprint() {
  const pages = [path[0], path[1], path[4], path[10]];
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
                What are sprints?
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              A sprint is a short, time-boxed period when a scrum team works to
              complete a set amount of work. Sprints are at the very heart of
              scrum and agile methodologies, and getting sprints right will help
              your agile team ship better software with fewer headaches.
            </p>

            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
              <blockquote>
                Twitter says about Sprints:
                <p>
                  Sprints make projects more manageable, allow teams to ship
                  high-quality work faster and more frequently, and gives them
                  more flexibility to adapt to change.
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
              Many associate scrum sprints with agile software development, so
              much so that scrum and agile are often thought to be the same
              thing. They’re not. Agile is a set of principles and scrum is a
              framework for getting s#it done.
            </p>
          </div>

          <div>
            <img
              src="https://wac-cdn.atlassian.com/dam/jcr:14abbbfb-5870-4c24-8b26-c5a56b25de59/scrum_process_atlassian.svg?cdnVersion=612"
              alt=""
            />
          </div>

          <span className="mt-2 block text-2xl leading-8 font-extrabold tracking-tight text-gray-900 ">
            Do's and Dont's
          </span>

          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <h3>Do</h3>
            <ul role="list">
              <li>
                Make sure the team sets and understands the sprint goal and how
                success will be measured. This is the key to keeping everyone
                aligned and moving forward toward a common destination.
              </li>
              <li>
                Do ensure you have a well-groomed backlog with your priorities
                and dependencies in order. This can be a big challenge that
                could derail the process if it’s not properly managed.
              </li>
              <li>
                Ensure you have a good understanding of velocity, and that it
                reflects things like leave and team meetings.
              </li>
              <li>
                Do use the sprint planning meeting to flesh out intimate details
                of the work that needs to get done. Encourage team members to
                sketch out tasks for all stories, bugs, and tasks that come into
                the sprint.
              </li>
              <li>
                Leave out work where you won’t be able to get the dependencies
                done, like work from another team, designs, and legal sign-off.
              </li>
              <li>
                Finally, once a decision or plan is made, make sure someone
                captures that information in your project management or
                collaboration tool, like your Jira tickets. That way, both the
                decision and the rationale are easy for everyone to see later.
              </li>
            </ul>

            <h3>Don'ts</h3>
            <ul role="list">
              <li>
                Don’t pull in too many stories, overestimate velocity, or pull
                in tasks that can’t be completed in the sprint. You don’t want
                to set yourself or your team up for failure.
              </li>
              <li>
                Don’t forget about quality or technical debt. Make sure to
                budget time for QA and non-feature work, like bugs and
                engineering health.
              </li>
              <li>
                Don’t let the team have a fuzzy view of what's in the sprint.
                Nail it down, and don’t focus so much on moving fast that you
                forget to make sure everyone’s moving in the same direction.
              </li>
              <li>
                Also, don’t take on a large amount of unknown or high-risk work.
                Break down stories that are large or have high uncertainty, and
                don't be afraid to leave some of that work for the next sprint.
              </li>
              <li>
                If you hear concerns from the team, whether it’s about velocity,
                low-certainty work, or work they think is bigger than what they
                estimated, don’t ignore it. Address the issue, and recalibrate
                when necessary.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
