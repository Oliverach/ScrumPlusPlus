import React from 'react'
import path from "../../util/filepath.JSON"
import Breadcrumb from '../../util/Breadcrumb'

export default function SprintReview() {
  const pages = [path[0], path[1], path[4], path[9]]
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
                Sprint Review
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
          

Sprint reviews are not retrospectives. A sprint review is about demonstrating the hard work of the entire team: designers, developers, and the product owner. At Atlassian we like to keep our sprint reviews casual. Team members gather around a desk for informal demos and describe the work they’ve done for that iteration. It’s a time to ask questions, try new features, and give feedback. Sharing in success is an important part of building an agile team.

            </p>

            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
              <blockquote>
                <p>
                  

Crossing the finish line and completing work requires good planning, a clear definition of ‘done,’ and focused execution. Most of this happens during sprint planning, but to have a successful sprint review and sprint, teams need to do a little more than plan. They need to develop a clear culture of how to deliver work as well as what it means to be ‘done.’

                </p>
              </blockquote>
   
            </div>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p>


            For teams that are new to sprint reviews, there’s a strong temptation to bleed sprint review into the retrospective. A sprint review is an independent ceremony from a sprint retrospective. Take the time to enjoy the fruit of your labors. Liberally celebrate accomplishments. Effective sprint reviews build up the morale and motivation of the team. This idea of celebration is so important to us on the Jira team, we’ve incorporated “go ahead, celebrate” into our vision statement for this very reason.
            </p>
          </div>
        </div>
      </div>
    </div>
      )
}
