

const ServiceCard = ({ service }) => {
    return (
        <div className="relative z-[1] after:absolute after:bottom-0 hover:after:transition-all after:content-[''] after:w-[100px] after:h-[100px] after:left-[-50px] after:bg-transparent after:-z-[1] after:rounded-tl-[30px] after:rounded-br-[10px] hover:after:bg-orange">

            <div className="hover:bg-white  relative z-[1] bg-transparent p-[44px] boxShadow text-center">
                <div className="mx-auto w-[110px] h-[120px] flex items-center justify-center">
                    <img className="h-full" src={service.icon} alt="" />
                </div>
                <div>
                    <h3 className="text-[20px] font-semibold leading-1 pt-7.5 pb-4">{service.title}</h3>
                    <p className="max-w-[181px] mx-auto">{service.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard