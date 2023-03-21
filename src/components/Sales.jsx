import ShoeCard from "../utils/ShoeCard";
import Title from "../utils/Title";

const Sales = ({ feature: {title, items} }) => {
    // console.log(feature);
  return (
    <>
      <div>
        <Title title={title} />
        <div>
            {items.map((item, key) => (
                <ShoeCard {...item} key={key} />
            ))}
        </div>
      </div>
    </>
  );
};
export default Sales;
