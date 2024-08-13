import React from 'react'

interface CardsSectionProps {
  title: string
  children: React.ReactNode
  home?: boolean
}

const CardsSection = ({title, children, home}: CardsSectionProps) => {
  return (
    <section className='cardsSection'>
      <h2 className={home ? 'bg-yellow-custom' : ''}>{title}</h2>
      <div>
        {children}
      </div>
    </section>
  )
}

export default CardsSection