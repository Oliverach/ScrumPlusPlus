import React from 'react'
import path from "../../util/filepath.JSON"
import Breadcrumb from '../../util/Breadcrumb'

export default function SprintRetrospective() {
  const pages = [path[0], path[1], path[4], path[8]]
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
                Sprint retrospective
              </span>
              </h1>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                he agile manifesto makes it clear: In order to best live the agile values, teams should meet reguarly to check in and make adjustments. Most commmonly, development teams apply this principle by hosting regular retrospective meetings, and while that meeting is the focus of much of this page, it's not the only way to retro.

                More recently, the concept of retrospectives has made it's way out of development teams and into all facets of business and teamwork.

                I know marketing teams that retro on campaigns, management teams that retro on large presentations, and above, Atlassian is hosting a retrospective on their entire industry. This openness to retrospecives, and their proliferation into all facets of business, is something to get incredibly excited about.
              </p>

            </div>
          </div>
        </div>
      </div>
  );
}
