import ShoeCard from "../utils/ShoeCard";
import Title from "../utils/Title";

const Sales = ({ feature: {title, items} }) => {
    // console.log(feature);
  return (
    <>
      <div>
        <Title title={title} />
        <div className="grid items-center justify-items-center grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 lg:gap-5 mt-7">
            {items.map((item, key) => (
                <ShoeCard {...item} key={key} />
            ))}
        </div>
      </div>
    </>
  );
};
export default Sales;
