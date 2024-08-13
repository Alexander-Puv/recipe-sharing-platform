import CardsSection from "@/components/CardsSection";
import ContentCard from "@/components/UI/ContentCard";
import Image from "next/image";
import {
  imgCrave1, imgCrave2, imgCrave3, imgCrave4,
  imgMore1, imgMore2, imgMore3, imgMore4, imgMore5,
  collection1, collection2, collection3,
  popular1, popular2, popular3, mainImage
} from '@/assets/rootImages'

export default function Home() {
  return (
    <main className="home">
      <section className="homeFirst">
        <Image src={mainImage} alt="Recipe Sharing Platform" />
        <div className="homeFirst__content">
          <div className="homeFirst__search">
            <input placeholder="search for recipies...." />
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.7504 43.7499L34.7025 34.702M34.7025 34.702C36.2502 33.1543 37.4779 31.317 38.3155 29.2948C39.1531 27.2727 39.5842 25.1054 39.5842 22.9166C39.5842 20.7279 39.1531 18.5605 38.3155 16.5384C37.4779 14.5162 36.2502 12.6789 34.7025 11.1312C33.1548 9.58351 31.3175 8.35582 29.2953 7.51822C27.2732 6.68062 25.1058 6.24951 22.9171 6.24951C20.7283 6.24951 18.561 6.68062 16.5389 7.51822C14.5167 8.35582 12.6794 9.58351 11.1317 11.1312C8.00599 14.2569 6.25 18.4962 6.25 22.9166C6.25 27.337 8.00599 31.5763 11.1317 34.702C14.2574 37.8277 18.4967 39.5837 22.9171 39.5837C27.3375 39.5837 31.5768 37.8277 34.7025 34.702Z" stroke="white" strokeWidth="3.125" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="homeFirst__add">
            <div className="homeFirst__text">
              <p>click here to add</p>
              <p>new recipe</p>
            </div>
            <div className="homeFirst__bottom">
              <h4>ADD RECIPE</h4>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.696 10.4451L6.2793 20.8617L16.696 31.2784" stroke="white" strokeWidth="2.17" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.2793 20.8618H22.946C34.4522 20.8618 43.7793 30.1889 43.7793 41.6951V43.7785" stroke="white" strokeWidth="2.17" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="homeFirst__smScreen">
            <div className="homeFirst__smText">
              <p>Click here to add</p>
              <p>new recipe</p>
            </div>
          </div>
        </div>
      </section>

      <CardsSection title="What we're craving">
        <ContentCard img={imgCrave1} title="Chicken Pasta" />
        <ContentCard img={imgCrave2} title="Chicken Pizza" />
        <ContentCard img={imgCrave3} title="Tomato Basil Soup" />
        <ContentCard img={imgCrave4} title="Paneer Butter Masala" />
      </CardsSection>

      <CardsSection title="More recipes">
        <ContentCard variant='rounded' img={imgMore1} title="Quick & Easy" />
        <ContentCard variant='rounded' img={imgMore2} title="Healthy" />
        <ContentCard variant='rounded' img={imgMore3} title="BBQ" />
        <ContentCard variant='rounded' img={imgMore4} title="Deserts" />
        <ContentCard variant='rounded' img={imgMore5} title="Vegetarian" className='break-all' />
      </CardsSection>

      <CardsSection title="Collections">
        <ContentCard variant='textInside' img={collection1} title="Collection" text="Collection" />
        <ContentCard variant='textInside' img={collection2} title="Collection" text="Collection" />
        <ContentCard variant='textInside' img={collection3} title="Collection" text="Collection" />
      </CardsSection>

      <section className="homeLast">
        <div className="homeLast__left">
          <h1>The Most Popular Recipes on CookBook Right Now</h1>
          <div className="homeLast__leftBottom">
            <p>View Complete Guide</p>
            <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.53674e-07 1.73863V22.2633C0.000573158 22.4711 0.0509272 22.6748 0.145639 22.8525C0.240352 23.0301 0.375836 23.175 0.537512 23.2716C0.699187 23.3681 0.880932 23.4126 1.06318 23.4003C1.24543 23.388 1.42128 23.3194 1.5718 23.2018L14.595 12.9394C15.135 12.5141 15.135 11.4901 14.595 11.0637L1.5718 0.801338C1.42159 0.682551 1.24565 0.612892 1.0631 0.599928C0.88055 0.586965 0.698368 0.631193 0.53635 0.727807C0.374332 0.824421 0.238673 0.969727 0.144114 1.14794C0.0495558 1.32615 -0.000287056 1.53044 9.53674e-07 1.73863Z" fill="#C65C14"/>
            </svg>
          </div>
        </div>
        <div className="homeLast__line"><span /></div>
        <div className="homeLast__right">
          <ContentCard variant='row' img={popular1} title='"Garlic bread: A comforting slice of heaven."' />
          <ContentCard variant='row' img={popular2} title='"Chocolate pudding: A rich, velvety delight that satisfies any sweet craving."' />
          <ContentCard variant='row' img={popular3} title='"Shrimp noodles: A savory seafood twist to noodle perfection."' />
        </div>
      </section>
    </main>
  );
}
