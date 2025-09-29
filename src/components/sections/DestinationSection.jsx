import { destination_1, destination_2 } from "../../constant/constant"
import DestinationCard from "../DestinationCard"
import SectionHeading from "../SectionHeading"

const destinationData = [
    {
        id: 1,
        image: destination_1,
        location: "Rome, Italty",
        price: "5,42",
        tripDay: "10 Days Trip" 
    },
    {
        id: 2,
        image: destination_2,
        location: "Rome, Italty",
        price: "5,42",
        tripDay: "10 Days Trip" 
    },
    {
        id: 3,
        image: destination_1,
        location: "Rome, Italty",
        price: "5,42",
        tripDay: "10 Days Trip" 
    },
]
const DestinationSection = () => {
  return (
    <section>
      <div className="container">
        <div className="relative z-[1]">
            <div className="absolute right-[-62px] bottom-[47px] z-[-1]">
                <img src="spring.png" alt="" />
            </div>
            <SectionHeading subHeading={"Top Selling"} heading={"Top Destinations"} />
            <div className="grid grid-cols-3 gap-7" >
                {destinationData?.map((destination) => <DestinationCard key={destination.id} destination={destination} />)}
            </div>
        </div>
      </div>
    </section>
  )
}

export default DestinationSection
