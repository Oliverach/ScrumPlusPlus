import React from 'react'
import path from "../../util/filepath.JSON"
import Breadcrumb from '../../util/Breadcrumb'

export default function ProductIncrement() {
  const pages = [path[0], path[1], path[5], path[13]]
  return (
    <Breadcrumb pages={pages} />
  )
}
