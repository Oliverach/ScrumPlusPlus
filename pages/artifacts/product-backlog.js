import React from 'react'
import path from "../../util/filepath.JSON"
import Breadcrumb from '../../util/Breadcrumb'

export default function ProductBacklog() {
  const pages = [path[0], path[1], path[5], path[11]]
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
                What is a Product backlog?
              </span>
              </h1>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                A product backlog is a prioritized list of work for the development team that is derived from the roadmap and its requirements. The most important items are shown at the top of the product backlog so the team knows what to deliver first. The development team doesn't work through the backlog at the Product owners pace and the product owner isn't pushing work to the development team. Instead, the development team pulls work from the product backlog as there is capacity for it, either continually (kanban) or by iteration (Scrum).
              </p>

              <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                <blockquote>
                  <p>
                    A team's roadmap and requirements provide the foundation for the product backlog. Roadmap initiatives break down into several epics, and each epic will have several requirements and user stories.
                    Since the Teams in Space website is the first initiative in the roadmap, we'll want to break down that initiative into epics  and user stories for each of those epics.
                    The product owner then organizes each of the user stories into a single list for the development team. The product owner may choose to deliver a complete epic first  . Or, it may be more important to the program to test booking a discounted flight which requires stories from several epics.

                  </p>
                </blockquote>

              </div>
            </div>
            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
              <p>
                Once the product backlog is built, it's important to regularly maintain it to keep pace with the program. Product owners should review the backlog before each iteration planning meeting to ensure prioritization is correct and feedback from the last iteration has been incorporated. Regular review of the backlog is often called "backlog grooming" in agile circles(some use the term backlog refinement).

                Once the backlog gets larger, product owners need to group the backlog into near-term and long-term items. Near-term items need to be fully fleshed out before they are labeled as such. This means complete user stories have been drawn up, collaboration with design and development has been sorted out, and estimates from development have been made. Longer term items can remain a bit vague, though it's a good idea to get a rough estimate from the development team to help prioritize them. The key word here is "rough": estimates will change once the team fully understands and begins work on those longer term items.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}
