import React from 'react'
import path from "../../util/filepath.JSON"
import Breadcrumb from '../../util/Breadcrumb'

export default function ScrumMaster() {
  const pages = [path[0], path[1], path[3], path[15]]
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
                ROLES
              </span>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Scrum Master
              </span>
              </h1>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                The scrum master is the role responsible for gluing everything together and ensuring that scrum is being done well. In practical terms, that means they help the product owner define value, the development team deliver the value, and the scrum team to get to get better.
                The scrum master is a servant leader which not only describes a supportive style of leadership but describes what they do on a day-to-day basis.
                They serve the product owner by helping them better understand and communicate value, to manage the backlog, help them plan the work with the team and break down that work to deliver the most effective learning.
                Serving the development team, the scrum master helps them self-organize, focus on outcomes, get to a “done increment,” and manage blockers. The scrum master also serves the organization at large, helping them understand what scrum is and create an environment that supports scrum.
              </p>

              <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                <blockquote>
                  <p>
                    Scrum myth: The scrum master has to run the daily scrum.
                    In fact, the scrum master does not run any of the events just ensures they happen and that they are successful.
                  </p>
                </blockquote>
                <h4>
                  The scrum master focuses on:
                </h4>
                <ul role="list">
                  <li><strong> Transparency </strong> - To effectively inspect and adapt it is important that the right people can see what is going on. But this is actually much harder than it looks. The scrum master is tasked with ensuring that the scrum team works in a transparent way. Examples include creating story maps and updating Confluence pages with retrospective ideas.</li>
                  <li><strong> Empiricism</strong>  - A fundamental for scrum and agile approaches the idea that the best way of planning is to do work and learn from it. The empirical process is not easy and requires the scrum master to coach the scrum team on breaking down work, describing clear outcomes, and reviewing those outcomes.</li>
                  <li><strong> Self-organization </strong>- Telling a development team they can self-organize does mean that the team will self-organize. In fact, self-organization comes over time and requires help and support. The scrum master will encourage team members to step outside their comfort zone and try different things and use practices such as ‘delegation poker’ to expose and challenge predefined ideas about role boundaries and responsibilities.</li>
                  <li><strong> Values </strong>- Scrum defines 5 values of courage, focus, commitment, respect, and openness not because they are nice to have, but because they create an environment of physiological safety and trust. This environment is necessary for agility to thrive. Following the values is the responsibility of everyone in the scrum team, but the scrum master takes an active role in encouraging and reminding everyone of the importance of those values.</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
              <p>
                The scrum master serves the product owner in sprint planning and sprint reviews, ensuring that value is clearly being described and direction set. They serve the development team in the daily scrum by ensuring that work is happening and that blockers are being removed. They also take responsibility for blockers that are outside of the team's ability to resolve. The scrum master ensures that every opportunity to improve is made transparent to the scrum team and the retrospective has a clear set of outcomes that can be executed.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}
