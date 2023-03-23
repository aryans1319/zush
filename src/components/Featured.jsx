const Featured = ({ content: { heading, title, text, btn, url, img } }) => {
  return (
    <>
      <div>
        <div>
          <h1>{heading}</h1>
          <h1>{title}</h1>
          <p>{text}</p>
          <a href={url}>
            <button type="button" className="">
              {btn}
            </button>
          </a>
        </div>
        <div>
          <img src={img} alt={`img/${heading}`} className=""></img>
        </div>
      </div>
    </>
  );
};

export default Featured;
