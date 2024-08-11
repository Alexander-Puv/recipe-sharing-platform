import React from 'react'

interface CardsSectionProps {
  title: string
  children: React.ReactNode
}

const CardsSection = ({title, children}: CardsSectionProps) => {
  return (
    <section className='cardsSection'>
      <h2>{title}</h2>
      <div>
        {children}
      </div>
    </section>
  )
}

export default CardsSection