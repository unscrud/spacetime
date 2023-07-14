'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.files)
  }

  return (
    <div>
      <input
        onChange={onFileSelected}
        type="file"
        id="media"
        className="invisible h-0 w-0"
      />

      {preview && (
        <img
          src={preview}
          alt=""
          className="aspect-video h-[280px] w-full rounded-lg object-cover"
        />
      )}
    </div>
  )
}
