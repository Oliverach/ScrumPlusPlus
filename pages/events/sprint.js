import React from 'react'
import path from "../../util/filepath.JSON"
import Breadcrumb from '../../util/Breadcrumb'

export default function Sprint() {
  const pages = [path[0], path[1], path[4], path[10]]
  return (
    <Breadcrumb pages={pages} />
  )
}
