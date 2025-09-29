import { service_icon_1, service_icon_2 } from "../constant/constant"
import SectionHeading from "./SectionHeading"
import ServiceCard from "./ServiceCard"



const servicesData = [
    {
        id: 1,
        icon: service_icon_1,
        title: "Calculated Weather ", 
        description: "Built Wicket longer admire do barton vanity itself do in it."
    },
    {
        id: 2,
        icon: service_icon_2,
        title: "Best Flights", 
        description: "Engrossed listening. Park gate sell they west hard for the."
    },
    {
        id: 3,
        icon: service_icon_2,
        title: "Local Events", 
        description: "Barton vanity itself do in it. Preferd to men it engrossed listening. "
    },
    {
        id: 4,
        icon: service_icon_2,
        title: "Customization", 
        description: "We deliver outsourced aviation services fo military customers"
    },
]

const ServiceSection = () => {
  return (
    <section className="py-[105px]">
        <div className="container">
            <SectionHeading heading={"We Offer Best Services"} subHeading={"CATEGORy"} />
            <div  className="grid grid-cols-4">
                {servicesData?.map( service => <ServiceCard key={service.id} service={service} />)}
            </div>
        </div>
    </section>
  )
}

export default ServiceSection