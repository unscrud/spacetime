'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.files)
  }

  return (
    <input
      onChange={onFileSelected}
      type="file"
      id="media"
      className="invisible h-0 w-0"
    />
  )
}
