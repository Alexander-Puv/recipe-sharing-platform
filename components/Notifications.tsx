import { Dispatch, SetStateAction } from 'react'
import {sender1, sender2, sender3, sender4} from '@/assets/notifications'
import {imgCrave1, imgCrave2} from '@/assets/rootImages'
import Image from 'next/image'

interface NotificationsProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const cards: notificationData[] = [
  {action: 'comment', senderImg: sender1, senderName: 'laila', sendTime: '1 Hour ago', to: imgCrave1,
  comment: 'Yummy recipe....loved it..thanks a lot for the quick and easy recipe'},
  {action: 'like', senderImg: sender2, senderName: 'jenny', sendTime: '1 Hour ago', to: imgCrave2},
  {action: 'follow', senderImg: sender3, senderName: 'jess.izu', sendTime: '1 Hour ago'},
  {action: 'like', senderImg: sender4, senderName: 'tommy', sendTime: '1 Hour ago', to: imgCrave2}
]

const NotificationsCard = ({action, sendTime, senderImg, senderName, to, comment}: notificationData) => {
  return (
    <div className="notificationsCard">
      <div className="notificationsCard__left">
        <Image src={senderImg} alt={senderName} width={44} height={44} className='rounded-full' />
        <p className="text-[0.5rem] leading-3">{sendTime}</p>
      </div>
      <div className="notificationsCard__center">
        <p className="text-sm">
          <b>{senderName}&#32;</b>
          {action === 'comment' ? 'commented'
            : action === 'follow' ? 'started following you'
            : 'liked your Recipe'
          }
        </p>
        <p className="text-xs line-clamp-2 text-ellipsis">{comment}</p>
      </div>
      {to && <div className="notificationsCard__right">
        <Image src={to} alt={senderName} width={45} height={45} />
      </div>}
    </div>
  )
}

const Notifications = ({open, setOpen}: NotificationsProps) => {
  return (
    <section className={`notifications ${!open && 'hidden'}`}>
      <div className="notifications__head">
        <p className='text-xl font-semibold'>Notifications</p>
        <svg
          width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"
          onClick={() => setOpen(!open)} className='cursor-pointer'
        >
          <path d="M13.4004 24.597L24.5977 13.4028M13.4004 13.4028L24.5977 24.597"
          stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <span className="notifications__line" />
      <div className="notifications__cards">
        {cards?.map((card, i) => {
          return <NotificationsCard {...card} key={i} /> /* change key */
        })}
      </div>
    </section>
  )
}

export default Notifications