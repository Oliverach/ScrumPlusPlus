import React from 'react'
import path from "../../util/filepath.JSON"
import Breadcrumb from '../../util/Breadcrumb'

export default function SprintBacklog() {
  const pages = [path[0], path[1], path[5], path[12]]
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
                What is a sprint backlog?
              </span>
              </h1>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                The Sprint Backlog is a list of tasks that the Scrum team must work through during a Sprint. The items from the Product Backlog are divided into tasks by the team. This is done at the Sprint Planning meeting. Then these tasks (which are written down on sticky notes) are pinned to the Scrum Task Board. All tasks listed in the "To Do" column at the start of the Sprint thus form the Sprint Backlog. Tasks from the Sprint Backlog, for example, are not assigned by the Scrum Master; rather, team members themselves consider which tasks have priority and fit their knowledge and experience. They then work on these tasks.
                The Sprint Backlog thus contains selected items from the Product Backlog that are scheduled for the upcoming Sprint. This includes a description of how each task needs to be executed. The Sprint Backlog is necessary because it shows all the work that the Scrum team has marked "Required to achieve the Sprint Goal".
              </p>

              <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                <blockquote>
                  <p>
                    Das Scrum-Team kann den Sprint Backlog während des Sprints anpassen. Dazu kommt es, wenn das Scrum-Team bemerkt, dass beispielsweise Mehrarbeit erforderlich ist, um das Sprintziel zu erreichen. Wenn Mehrarbeit erforderlich ist, fügt das Scrum-Team diese dem Sprint Backlog hinzu.
                  </p>
                </blockquote>

              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
