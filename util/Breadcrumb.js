import React from 'react'
import Link from 'next/link'

export default function Breadcrumb({ pages }) {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-1 md:space-x-3">

                {pages.map((page, index) => {

                    if (index === 0) {
                        return (
                            <li className="inline-flex items-center">
                                <Link href={page.link}>
                                    <p className="cursor-pointer inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                        {page.name}
                                    </p>
                                </Link>
                            </li>)
                    } else if (index === pages.length - 1) {
                        return (
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    <p className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{page.name}</p>
                                </div>
                            </li>
                        )
                    }
                    return (
                        <li>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                <Link href={page.link}>
                                    <p className="cursor-pointer ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">{page.name}</p>
                                </Link>
                            </div>
                        </li>
                    )
                })}
            </ol>
        </nav>)
}
