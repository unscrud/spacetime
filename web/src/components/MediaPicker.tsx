'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  const [fileType, setFileType] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])
    setPreview(previewURL)

    const mimeTypeOfFile = files[0].type
    setFileType(mimeTypeOfFile)
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        name="coverUrl"
        type="file"
        id="media"
        accept="image/*,video/*"
        className="invisible h-0 w-0"
      />

      {preview && fileType && fileType.includes('image') && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt=""
          className="aspect-video h-[280px] w-full rounded-lg object-cover"
        />
      )}

      {preview && fileType && fileType.includes('video') && (
        <video
          src={preview}
          controls={false}
          className="aspect-video h-[280px] w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}
