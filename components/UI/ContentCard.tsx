import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'
import RatingStars from './RatingStars'

interface ContentCardProps {
  variant?: 'default' | 'defaultBig' | 'rate' | 'rateWide' | 'textInside' | 'rounded'
  img: string | StaticImport
  title: string
  text?: string
  rating?: number
  favourite?: boolean
  className?: string
}

const ContentCard = ({variant = 'default', img, title, text, rating, favourite, className}: ContentCardProps) => {
  return (
    <div className={`contentCard contentCard-${variant} ${className}`}>
      <Image src={img} alt={title} />
      <div className="contentCard__text">
        <h5>{title}</h5>
        {(variant === 'rate' || variant === 'rateWide') && <>
          <p className='sm'>-{text}</p>
          <RatingStars rating={rating} />
        </>}
        {variant === 'textInside' &&
          <h4>{text}</h4>
        }
      </div>
      {(variant === 'rate' || variant === 'rateWide') && <span className='contentCard__fav'>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.0007 35.5833L17.584 33.3833C9.00065 25.6 3.33398 20.45 3.33398 14.1667C3.33398 9.01667 7.36732 5 12.5007 5C15.4007 5 18.184 6.35 20.0007 8.46667C21.8173 6.35 24.6007 5 27.5007 5C32.634 5 36.6673 9.01667 36.6673 14.1667C36.6673 20.45 31.0007 25.6 22.4173 33.3833L20.0007 35.5833Z"
            fill={favourite ? '#F24E1E' : "none"}
            stroke={favourite ? 'none' : 'black'}
            strokeWidth={favourite ? 'none' : '3.5'}
          />
        </svg>
      </span>}
    </div>
  )
}

export default ContentCard