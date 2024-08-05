import React from 'react'

const Star = ({fill}: {fill: boolean}) => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill={fill ? '#E4A951' : "none"} xmlns="http://www.w3.org/2000/svg">
      <path d="M6.41714 22.5365L8.02652 15.5715L8.13774 15.0902L7.76599 14.7649L2.40276 10.0717L9.45796 9.45502L9.95384 9.41167L10.1467 8.95277L12.9042 2.391L15.6616 8.95116L15.8545 9.41L16.3503 9.45335L23.4042 10.07L18.0422 14.7633L17.6706 15.0886L17.7818 15.5698L19.3913 22.5353L13.3334 18.8444L12.9041 18.5828L12.4748 18.8445L6.41714 22.5365Z" stroke="#E4A951" strokeWidth="1.65"/>
    </svg>
  )
}

const RatingStars = ({rating = 0}: {rating?: number}) => {
  rating = Math.round(rating * 2) / 2

  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Star fill key={i} />)
    } else if (i - 0.5 === rating) {
      stars.push(<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" key={i}>
        <path d="M25.5 9.64526L16.5125 8.8621L13 0.5L9.4875 8.87474L0.5 9.64526L7.325 15.62L5.275 24.5L13 19.7884L20.725 24.5L18.6875 15.62L25.5 9.64526ZM13 17.4263V5.67895L15.1375 10.7821L20.6125 11.2621L16.4625 14.9L17.7125 20.3063L13 17.4263Z" fill="#E4A951"/>
      </svg>)
    } else {
      stars.push(<Star fill={false} key={i} />)
    }
  }

  return (
    <div className='flex pb-2 pl-1'>{stars}</div>
  )
}

export default RatingStars