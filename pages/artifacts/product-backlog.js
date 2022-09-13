import React from 'react'
import path from "../../util/filepath.JSON"
import Breadcrumb from '../../util/Breadcrumb'

export default function ProductBacklog() {
  const pages = [path[0], path[1], path[5], path[11]]
  return (
    <Breadcrumb pages={pages} />
  )
}
