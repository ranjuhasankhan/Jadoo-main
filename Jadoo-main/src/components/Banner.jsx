import bg_shape from "../assets/hero-bg.png"
import traveller from "../assets/traveller.png"
import Button from "./Button"
import PlayIcon from "./PlayIcon"

const bgStyle = {
    background: `url(${bg_shape})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right top"
}

const Banner = () => {
  return (
    <section className="min-h-[1018px] py-10 md:pt-[217px]" style={bgStyle}>
      <div className="container">
        <div className="grid grid-cols-2 gap-4">
            <div>
                <h2 className="font-semibold uppercase text-[20px] text-orange">Best Destinations around the world</h2>
                <h1 className="font-bold text-[84px] text-heading pt-6 pb-7.5 leading-[1.05]">Travel, <span>enjoy</span> and live a new and full life</h1>
                <p className="text-base text-paragraph leading-[30px]">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                <div className="flex items-center gap-4 pt-8.5">
                    <Button>Find out more</Button>
                    <Button btnStyle="icon">
                      <PlayIcon/>
                      Play Demo
                    </Button>
                </div>
            </div>
            <div>
                <img src={traveller} alt="traveller" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
