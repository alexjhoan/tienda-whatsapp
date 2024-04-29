import React from 'react'
import Image from 'next/image'

interface customImageTypes {
  src: string
  width: number
  height: number
  alt: string
  className?: string
}

const CustomImage = ({ src, width, height, alt, className }: customImageTypes) => {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      style={{ maxWidth: '100%', height: 'auto', width: 'auto', maxHeight: height }}
      className={className}
    />
  )
}

export default CustomImage
