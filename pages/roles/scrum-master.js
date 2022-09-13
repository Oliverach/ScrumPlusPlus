import React from 'react'
import path from "../../util/filepath.JSON"
import Breadcrumb from '../../util/Breadcrumb'

export default function ScrumMaster() {
  const pages = [path[0], path[1], path[3], path[15]]
  return (
    <Breadcrumb pages={pages} />
  )
}
