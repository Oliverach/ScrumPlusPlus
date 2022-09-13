import React from 'react'
import path from "../../util/filepath.JSON"
import Breadcrumb from '../../util/Breadcrumb'

export default function DevTeam() {
  const pages = [path[0], path[1], path[3], path[16]]
  return (
    <Breadcrumb pages={pages} />
  )
}
