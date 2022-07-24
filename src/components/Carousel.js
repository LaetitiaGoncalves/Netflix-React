const Carousel = (props) => {
  return (
    <div className="line">
      {props.images.map((url) => {
        return <img src={url} alt="film" />;
      })}
    </div>
  );
};

export default Carousel;
