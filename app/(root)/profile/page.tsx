import {imgCrave1, imgCrave2, imgCrave3, imgCrave4} from '@/assets/rootImages'
import Image from 'next/image'
import CardsSection from '@/components/CardsSection'
import ContentCard from '@/components/UI/ContentCard'
import profilePhoto from '@/assets/profilePhoto.png'
import Button from '@/components/UI/Button'
import RatingStars from '@/components/UI/RatingStars'
import { FacebookSvg, InstagramSvg, PinterestSvg, TwitterSvg } from '@/components/svg'
const name = 'Rhea'
const rating = 0
const description = "Hi! i’m Rhea, a food blogger extraordinaire, captures the essence of global flavors through tantalizing visuals and vivid storytelling. From city markets to hidden gems, Alex's blog is a culinary adventure that invites readers to indulge in the art of gastronomy. Savor the world one delicious post at a time!"
const [likes, followers, reviews] = [268, 149, 32]
const [instagram, facebook, pinterest, twitter] = [true, false, true, true]
const posted:recipeData[] = [
  {img: imgCrave1, title: 'Chicken Pasta'},
  {img: imgCrave2, title: 'Chicken Pizza'},
  {img: imgCrave3, title: 'Tomato Basil Soup'},
]
const favourites:recipeData[] = [
  {img: imgCrave1, title: 'Chicken Pasta', text: 'Rhea', favourite: true, rating: 5},
  {img: imgCrave2, title: 'Chicken Pizza', text: 'Rhea', favourite: true, rating: 4.9},
  {img: imgCrave3, title: 'Tomato Basil Soup', text: 'Rhea', favourite: true, rating: 4.3},
  {img: imgCrave4, title: 'Paneer Butter Masala', text: 'Norhea', favourite: true, rating: 3},
]

const Profile = () => {
  return (
    <main>
      <section className='profileTop'>
        <div className="profileTopInfo">
          <div className="profileTopInfo__top">
            <Image src={profilePhoto} alt={name} />
            <div className="lg:ml-[6.25rem]">
              <h2 className='mb-3'>{name}</h2>
              <RatingStars rating={rating} />
              <div className="profileTopInfo__media">
                {instagram && <InstagramSvg />}
                {facebook && <FacebookSvg />}
                {pinterest && <PinterestSvg />}
                {twitter && <TwitterSvg />}
              </div>
            </div>
            <Button text='Edit Profile' />
          </div>
          <div className="font-semibold">{description}</div>
        </div>
        <div className="profileTopActivity">
          <div>
            <h1>{likes}</h1>
            <h4>likes</h4>
          </div>
          <div>
            <h1>{followers}</h1>
            <h4>followers</h4>
          </div>
          <div>
            <h1>{reviews}</h1>
            <h4>reviews</h4>
          </div>
        </div>
      </section>

      <CardsSection title='Recipes Posted'>
        {posted?.map((props) => {
          return (
            <ContentCard variant='defaultBig' {...props} key={props.title} />
          )
        })}
      </CardsSection>

      <CardsSection title='Favourites'>
        {favourites?.map((props) => {
          return (
            <ContentCard variant='rate' {...props} key={props.title} />
          )
        })}
      </CardsSection>
    </main>
  )
}

export default Profile