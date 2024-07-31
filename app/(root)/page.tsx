import Image from "next/image";
import mainImage from '@/assets/mainImage.png'

export default function Home() {
  return (
    <main>
      <section className="mainFirst">
        <Image src={mainImage} alt="Recipe Sharing Platform" />
        <div className="mainFirst__content">
          <div className="mainFirst__search">
            <input placeholder="search for recipies...." />
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.7504 43.7499L34.7025 34.702M34.7025 34.702C36.2502 33.1543 37.4779 31.317 38.3155 29.2948C39.1531 27.2727 39.5842 25.1054 39.5842 22.9166C39.5842 20.7279 39.1531 18.5605 38.3155 16.5384C37.4779 14.5162 36.2502 12.6789 34.7025 11.1312C33.1548 9.58351 31.3175 8.35582 29.2953 7.51822C27.2732 6.68062 25.1058 6.24951 22.9171 6.24951C20.7283 6.24951 18.561 6.68062 16.5389 7.51822C14.5167 8.35582 12.6794 9.58351 11.1317 11.1312C8.00599 14.2569 6.25 18.4962 6.25 22.9166C6.25 27.337 8.00599 31.5763 11.1317 34.702C14.2574 37.8277 18.4967 39.5837 22.9171 39.5837C27.3375 39.5837 31.5768 37.8277 34.7025 34.702Z" stroke="white" strokeWidth="3.125" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="mainFirst__add">
            <div className="mainFirst__text">
              <p>click here to add</p>
              <p>new recipe</p>
            </div>
            <div className="mainFirst__bottom">
              <h4>ADD RECIPE</h4>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.696 10.4451L6.2793 20.8617L16.696 31.2784" stroke="white" strokeWidth="2.17" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.2793 20.8618H22.946C34.4522 20.8618 43.7793 30.1889 43.7793 41.6951V43.7785" stroke="white" strokeWidth="2.17" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="mainFirst__smScreen">
            <div className="mainFirst__smText">
              <p>Click here to add</p>
              <p>new recipe</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
