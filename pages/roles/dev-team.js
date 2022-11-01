import React from 'react'
import path from "../../util/filepath.JSON"
import Breadcrumb from '../../util/Breadcrumb'

export default function DevTeam() {
  const pages = [path[0], path[1], path[3], path[16]]
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
                Development Team
              </span>
              </h1>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                The development team are the people that do the work. At first glance, you may think the “development team” means engineers. But that’s not always the case.
                According to the Scrum Guide, the development team can be comprised of all kinds of people including designers, writers, programmers, etc.
                You can think of it in the same way as when you have a house project and you hire a developer.
                They develop the project and do the work. Yes, this might mean they lay bricks, do plumbing, even dig holes, but the person is known as a developer. So, that means the ‘developer’ role in scrum means a team member who has the right skills, as part of the team to do the work.
              </p>


            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
              <p>
                The development team should be able to self-organize so they can make decisions to get work done. Think of a development team as similar to a production support team that is called in during the night because something has gone wrong.
                The development team, like the production support team, can make decisions and deliver the fix/value for the problem at hand.
                Self-organization isn’t about disrespecting the organization, but rather about empowering the people closest to the work to do what’s needed to solve the problem.
              </p>
            </div>
              <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                  <h4>
                    The development team’s responsibilities include:
                  </h4>
                <ul role="list">
                  <li>Delivering the work through the sprint.</li>
                  <li>To ensure transparency during the sprint they meet daily at the daily scrum ( sometimes called a standup). The daily scrum provides transparency to the work and provides a dedicated place for team members to seek help, talk about success and highlight issues and blockers. The scrum master might facilitate the daily scrum, but ultimately it is the responsibility of the development team to run this meeting.
                    It is their meeting to help them, as a group, to inspect and adapt the work they are doing and work in a more effective way.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
