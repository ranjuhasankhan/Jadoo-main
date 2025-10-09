import { testimonial_1 } from "../constant/constant";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="grid grid-cols-1 gap-3 relative rounded-[10px] pt-7 pr-16 pb-8.5 pl-7 commonShadow ">
      <div className="absolute size-[68px] rounded-full overflow-hidden top-0 left-0 translate-[-50%]">
        <img
          src={testimonial?.image ? testimonial.image : testimonial_1}
          alt="user image"
        />
      </div>
      <div>
        <p>{testimonial?.description}</p>
      </div>
      <div>
        <h3>{testimonial?.name}</h3>
        <p>{testimonial?.designation}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
