import "./App.css";
import Outlined from "./Components/Button/Button";
import unsplash1 from "./images/unsplash 1.png";
import unsplash2 from "./images/unsplash 2.png";
import unsplash3 from "./images/unsplash 3.png";
import image13 from "./images/image 13.png";
import image11 from "./images/image 11.png";
import image18 from "./images/image 18.png";
import image21 from "./images/image 21.png";
import ellipse1 from "./images/Ellipse 1.png";
import Card from "./Components/Card/Card";
import SimpleAccordion from "./Components/List/List";
import Page from "./Components/Page/Page";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TemporaryDrawer from "./Components/Footer/Footer";
import NavMenu from "./Components/NavMenu/NavMenu";

function App() {
  return (
    <div className="">
      <header className="container1">
        <div className="container11">
          <nav className="py-[37px] flex justify-between items-center">
            <h1 className="font-[600] text-[32px] text-[#192252] leading-[39px]">
              Cootels
            </h1>

            <ul className="font-[500] text-[16px] sm:hidden text-[#192252] leading-[19px] flex gap-[32px]">
              <li>Rooms</li>
              <li>Reservation</li>
              <li>Contacs</li>
            </ul>
            <div className=" sm:hidden">
            <Outlined variant="outlined" text="GET STARTED" />

            </div>
            <div className="hidden sm:block">
              <NavMenu />
            </div>
          </nav>
          <div className="flex items-center justify-between p-[80px_0_96px_0] xl:flex-wrap xl:justify-center xl:gap-[50px]">
            <div className="flex flex-col gap-[32px] xl:items-center xl:w-[75%] ">
              <div className="flex flex-col gap-[24px] xl:items-center">
                <h1 className="font-[600] xl:text-center max-w-[587px] text-[48px] text-[#192252] leading-[72px]">
                  Nature, Warmth, and Beauty in One Space
                </h1>
                <p className="font-[400] xl:text-center max-w-[485px] text-[18px] text-[#848FAC] leading-[27px]">
                  One place to release all the stress, bring back happines, and
                  get back to nature. We provide the best room and nature for
                  you. Come visit us anytime you want.
                </p>
              </div>
              <Outlined variant="outlined" text="Reservation" />
            </div>
            <div className="flex gap-[24px] sm:hidden relative xl:w-[75%] xl:justify-center">
              <img src={unsplash1} alt="" />
              <img src={unsplash2} className="relative top-[90px]" alt="" />
              <img src={unsplash3} alt="" />
            </div>
          </div>
        </div>
      </header>

      <section className="container1">
        <div className="container11 py-[80px] flex items-center justify-between lg:flex-wrap lg:justify-center lg:gap-[50px]">
          <img src={image13} alt="" />
          <div className="max-w-[640px] flex flex-col gap-[32px] lg:items-center">
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[24px]">
                <h1 className="font-[600] lg:text-center text-[36px] text-[#192252] leading-[54px]">
                  Cozy and Down to Earth Cootage Hotel in Norway.
                </h1>
                <p className="font-[400] lg:text-center text-[18px] text-[#848FAC] leading-[27px]">
                  Our Cootage Hotel is an intimate hideway concieved for
                  dicerning travelers. It faces directly the unique and
                  spectacular panorama of the Hallerbos Jungle.
                </p>
              </div>
              <p className="font-[400] lg:text-center text-[18px] text-[#848FAC] leading-[27px]">
                Cootels extends along a private, quiet, and beautiful nature.
                Stay away from crowd and enjoy the cozy and beauty with us.
              </p>
            </div>
            <Outlined variant="outlined" text="Learn More" />
          </div>
        </div>
      </section>

      <section className="container1">
        <div className="container11 py-[80px] flex flex-col gap-[32px]">
          <div className="flex items-center justify-between lg:flex-wrap lg:justify-center gap-[25px]">
            <div className="max-w-[640px] flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[24px]">
                <h1 className="font-[600] text-center text-[36px] text-[#192252] leading-[54px]">
                  Cabin Activities
                </h1>
                <p className="font-[400] text-center text-[18px] text-[#848FAC] leading-[27px]">
                  Don’t worry to get bored easily in our cabin. We have so many
                  cabin activities for you to do it alone or with group. Maybe
                  this is the best chance for you to make new friends or even a
                  lover.
                </p>
              </div>
            </div>
            <img src={image21} alt="" />
          </div>

          <div className="flex items-center justify-between lg:flex-wrap lg:justify-center gap-[25px]">
            <img src={image18} alt="" />

            <div className="max-w-[640px] flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[24px]">
                <h1 className="font-[600] text-center text-[36px] text-[#192252] leading-[54px]">
                  100% Organic Food
                </h1>
                <p className="font-[400] text-center text-[18px] text-[#848FAC] leading-[27px] max-w-[90%]">
                  We served 100% organic, low process and delicious food. We
                  allow our guest to have breakfast or dinner request.What ever
                  made your taste buds happy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container1">
        <div className="container11 flex flex-col gap-[88px] py-[80px]">
          <div className="max-w-[580px] flex flex-col items-center mx-auto gap-[32px]">
            <div className="flex flex-col gap-[24px]">
              <h1 className="font-[600] text-center text-[36px] text-[#192252] leading-[54px]">
                Many Rooms to Choose
              </h1>
              <p className="font-[400] text-center text-[18px] text-[#848FAC] leading-[27px]">
                There is a room for every needs. We have room for individuals
                until family size, we also have a cabin for more private
                experience
              </p>
            </div>
            <Outlined variant="outlined" text="Explore more" />
          </div>

          <div className="flex justify-between flex-wrap xl:justify-center xl:gap-[50px]">
            <Card
              img={image11}
              texth1="Single Room"
              textp="Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others."
              text="Learn more"
            />
            <Card
              img={image11}
              texth1="Single Room"
              textp="Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others."
              text="Learn more"
            />
            <Card
              img={image11}
              texth1="Single Room"
              textp="Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others."
              text="Learn more"
            />
          </div>
        </div>
      </section>

      <section className="container1">
        <div className="container11 py-[80px] flex items-center justify-between lg:flex-wrap lg:items-center lg:justify-center lg:gap-[50px]">
          <div className="max-w-[407px] flex flex-col gap-[32px] lg:items-center">
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[12px]">
                <p className="font-[500] lg:text-center text-[16px] text-[#424F7B] leading-[24px]">
                  Start your journey!
                </p>
                <h1 className="font-[600] lg:text-center text-[36px] text-[#192252] leading-[54px]">
                  How to Get My Room?
                </h1>
              </div>
              <p className="font-[400] lg:text-center text-[18px] text-[#848FAC] leading-[27px]">
                You can contact us by phone or email us. Easily tap the contact
                button below and it will take you to our contact point
              </p>
            </div>

            <div className="flex gap-[24px]">
              <Outlined variant="outlined" text="Contact us" />
              <Outlined variant="text" text="Explore more room" />
            </div>
          </div>
          <div>
            <div className="max-w-[588px]">
              <SimpleAccordion />
            </div>
          </div>
        </div>
      </section>

      <section className="container1">
        <div className="container11 py-[80px]">
          <div className="max-w-[793px] mx-auto flex flex-col items-center gap-[24px]">
            <div className="flex flex-col items-center gap-[40px]">
              <div className="flex flex-col gap-[44px]">
                <div className="flex flex-col items-center gap-[62px]">
                  <h1 className="font-[600] text-[36px] text-[#192252] leading-[54px]">
                    Hear From Our Happy Customers
                  </h1>
                  <img src={ellipse1} alt="" />
                </div>
                <p className="font-[400] text-[18px] text-center text-[#848FAC] leading-[27px]">
                  “Great service, great food, great people. The scenery is also
                  beautiful, you can do so much activity even with your
                  famility. Worth every penny! you should come and see for your
                  self. 5 out of 5! the waffle is great!”
                </p>
              </div>
              <p className="font-[500] text-[20px] text-[] leading-[30px]">
                Kirana Dunham
              </p>
            </div>
            <Page />
          </div>
        </div>
      </section>
      <footer className="container1 bg-[#0B265A]">
        <div className="hidden md:block md:mx-auto md:w-max">
        <TemporaryDrawer/>

        </div>
        <div className="container11 py-[120px] text-white flex justify-between md:hidden">
          <div className="flex flex-col gap-[36px]">
          <div className="flex flex-col gap-[13px]">
          <h1 className="font-[700] text-[32px] ">Cootels</h1>
          <ul className="font-[400] text-[16px] text-[#D9DBDE] flex flex-col gap-[5px]">
            <li>Your Best Private.</li>
            <li>Hideway From Crowd.</li>
            <li>Back to Nature.</li>
          </ul>
        </div>
        <div className="flex gap-[24px]">
        <TwitterIcon className="text-white" />
        <InstagramIcon className="text-white"/>
        <FacebookIcon className="text-white"/>
        </div>
          </div>

        <div className="flex items-start gap-[120px]">
          <ul className="flex flex-col gap-[24px]">
            <li className="font-[700] text-[16px] text-[white]">Rooms</li>
            <li className="font-[400] text-[16px] text-[#D9DBDE]">Single Room</li>
            <li className="font-[400] text-[16px] text-[#D9DBDE]">Double Room</li>
            <li className="font-[400] text-[16px] text-[#D9DBDE]">Cabin</li>
            <li className="font-[400] text-[16px] text-[#D9DBDE]">Custom Room</li>
          </ul>
          <ul className="flex flex-col gap-[24px]">
            <li className="font-[700] text-[16px] text-[white]">Reservation</li>
            <li className="font-[400] text-[16px] text-[#D9DBDE]">See the Steps</li>
            <li className="font-[400] text-[16px] text-[#D9DBDE]">Best Time</li>

          </ul>
          <ul className="flex flex-col gap-[24px]">
            <li className="font-[700] text-[16px] text-[white]">Contact</li>
            <li className="font-[400] text-[16px] text-[#D9DBDE]">Our Number</li>
            <li className="font-[400] text-[16px] text-[#D9DBDE]">Our Email</li>
            <li className="font-[400] text-[16px] text-[#D9DBDE]">Our Location</li>
          </ul>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
