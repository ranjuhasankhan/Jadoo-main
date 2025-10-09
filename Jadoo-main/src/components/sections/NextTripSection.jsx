import { nextTrip, step_1, step_2, step_3 } from "../../constant/constant"
import SectionHeading from "../SectionHeading"


const nextTripData = [
    {
        id: 1,
        image: step_1,
        title: "Choose Destination",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
    },
    {
        id: 2,
        image: step_2,
        title: "Make Payment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
    },
    {
        id: 3,
        image: step_3,
        title: "Reach Airport on Selected Date",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
    },
]

const NextTripSection = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-2 gap-6 items-center">
            <div>
                 <SectionHeading align="left" subHeading={"Easy and Fast"} heading={"Book your next trip in 3 easy steps"} />
                 <div className="grid grid-cols-1 gap-3">
                    {nextTripData?.map((step)=> {
                        return (
                            <StepItem key={step.id} step={step} />
                        )
                    })}
                 </div>
            </div>
            <div>
                <img src={nextTrip} alt="trip image" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default NextTripSection

const StepItem =({step})=> {
    const bgStyle = ()=> {
        if (step.id === 1) {
            return "bg-yellow"
        }
        if (step.id === 2) {
            return "bg-orange"
        }
        if (step.id === 3) {
            return "bg-darkpaste"
        }
    }
    return (
        <div className='grid grid-cols-[48px_1fr] gap-5 items-center max-w-[395px]'>
            <div className={`size-[48px] rounded-[13px] flex items-center justify-center ${bgStyle()}`}>
                <img src={step.image} alt="icon" />
            </div>
            <div>
                <h4 className="text-paragraph font-bold font-poppins">{step.title}</h4>
                <p className="text-paragraph font-normal font-poppins">{step.description}</p>
            </div>
        </div>
    )
}
