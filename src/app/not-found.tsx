'use client'
import {redirect} from 'next/navigation'
import * as React from 'react'

export default function NotFound() {
  React.useEffect(() => {
    redirect('/')
  })

  return null
}
