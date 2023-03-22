import ShoeCard from "../utils/ShoeCard";
import Title from "../utils/Title";

const Sales = ({ ifSalesExist, feature: {title, items} }) => {
    // console.log(feature);
  return (
    <>
      <div className="nike-container">
        <Title title={title} />
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifSalesExist ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
            {items.map((item, key) => (
                <ShoeCard {...item} key={key} ifSalesExist={ifSalesExist} />
            ))}
        </div>
      </div>
    </>
  );
};
export default Sales;
