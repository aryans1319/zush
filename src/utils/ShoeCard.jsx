import { StarIcon } from "@heroicons/react/24/solid"

const ShoeCard = ({
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <div>
          <div>
            <h1>{price}</h1>
          </div>
          <div>
            <StarIcon className="icon-style text-slate-800" />
            <h1>{rating}</h1>
          </div>
          <div>
            <button type="button">{btn}</button>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default ShoeCard