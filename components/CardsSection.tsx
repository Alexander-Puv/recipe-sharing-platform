import React from 'react'

interface CardsSectionProps {
  title: string
  children: React.ReactNode
}

const CardsSection = ({title, children}: CardsSectionProps) => {
  return (
    <section className='flex flex-col gap-[4.5rem] pt-16 pb-20 px-44'>
      <h2 className='w-max p-2 bg-yellow-custom uppercase'>{title}</h2>
      <div className="flex justify-between">
        {children}
      </div>
    </section>
  )
}

export default CardsSection