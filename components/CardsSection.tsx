import React from 'react'

interface CardsSectionProps {
  title: string
  children: React.ReactNode
}

const CardsSection = ({title, children}: CardsSectionProps) => {
  return (
    <section className='
      flex flex-col items-center gap-[4.5rem] pt-16 pb-20 px-8
      md:items-start
      lg:px-20 xl:px-32 2xl:px-44
    '>
      <h2 className='w-max p-2 bg-yellow-custom text-3xl uppercase md:text-5xl'>{title}</h2>
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        {children}
      </div>
    </section>
  )
}

export default CardsSection