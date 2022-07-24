import Carousel from "./Carousel";

const Section = (props) => {
  return (
    <div>
      <p>{props.mainCategory.category}</p>
      <Carousel images={props.mainCategory.images} />
    </div>
  );
};

export default Section;
