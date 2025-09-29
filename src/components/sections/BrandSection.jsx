import {
  brand_1,
  brand_2,
  brand_3,
  brand_4,
  brand_5,
} from "../../constant/constant";

const brandData = [
  {
    id: 1,
    image: brand_1,
  },
  {
    id: 2,
    image: brand_2,
  },
  {
    id: 3,
    image: brand_3,
  },
  {
    id: 4,
    image: brand_4,
  },
  {
    id: 5,
    image: brand_5,
  },
];
const BrandSection = () => {
  return (
    <section className="pt-[98px]">
      <div className="container">
        <div className="grid grid-cols-5 gap-3 items-center">
          {brandData?.map((brand) => (
            <BrandItem key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;

function BrandItem({ brand }) {
  return (
    <div className="h-[86px] flex items-center justify-center py-10 px-10 rounded-[10px] commonHover cursor-pointer">
      <img className="w-full" src={brand.image} alt="image" />
    </div>
  );
}
