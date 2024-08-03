import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

interface ContentCardProps {
  variant?: 'default' | 'defaultBig' | 'rate' | 'rateWide' | 'textInside' | 'rounded'
  img: string | StaticImport
  title: string
  text?: string
  rate?: number
}

const ContentCard = ({variant = 'default', img, title, text, rate}: ContentCardProps) => {
  return (
    <div className={`contentCard contentCard-${variant}`}>
      <Image src={img} alt={title} />
      <div className="contentCard__text">
        <h5>{title}</h5>
        {variant === 'rate' || variant === 'rateWide' && <>
          <span>{text}</span>
          {/* rate */}
        </>}
        {variant === 'textInside' &&
          <span>{text}</span>
        }
      </div>
    </div>
  )
}

export default ContentCard