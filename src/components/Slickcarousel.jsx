import Slickcarouseldata from "./Slickcarouseldata";
import Hotel1 from "../assets/geetanjaliguest.jpg";
// import Trip2 from "../assets/JampuiHills.JPG";
// import Trip3 from "../assets/Trishna.jpg";

import "./Slickcarouselstyles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { Link } from "react-router-dom";

function Slickcarousel() {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="Slick">
      <h1>Trendy accommodations</h1>

      <Slider {...settings}>
        <div className="Slickcard">
          <Slickcarouseldata
            image={Hotel1}
            heading="Geetanjali Guest House"
            buttonText="Explore Spot"
            url="https://maps.app.goo.gl/dQy1JHur7nizSqoG7"
            btnClass="show"
          />
        </div>
        <div className="Slickcard">
          <Slickcarouseldata
            image={Hotel1}
            heading="Hotel Airdrop"
            buttonText="Explore Spot"
            url="https://maps.app.goo.gl/a6D8y33Es38F1YyW9"
            btnClass="show"
          />
        </div>
        <div className="Slickcard">
          <Slickcarouseldata
            image={Hotel1}
            heading="Hotel Welcome Palace"
            buttonText="Explore Spot"
            url="https://maps.app.goo.gl/tpRUWd6hrR6moB3E7"
            btnClass="show"
          />
        </div>
        <div className="Slickcard">
          <Slickcarouseldata
            image={Hotel1}
            heading="Hotel Rimi International"
            buttonText="Explore Spot"
            url="https://maps.app.goo.gl/8eMfL2xXv3DoEXhm9"
            btnClass="show"
          />
        </div>
        <div className="Slickcard">
          <Slickcarouseldata
            image={Hotel1}
            heading="Ginger"
            buttonText="Explore Spot"
            url="https://maps.app.goo.gl/p5UHRbSVdnWCqBDAA"
            btnClass="show"
          />
        </div>
        <div className="Slickcard">
          <Slickcarouseldata
            image={Hotel1}
            heading="Hotel Woodland Park"
            buttonText="Explore Spot"
            url="https://maps.app.goo.gl/NLn2pm4SmY6JCKAZ7"
            btnClass="show"
          />
        </div>
        <div className="Slickcard">
          <Slickcarouseldata
            image={Hotel1}
            heading="Hotel Radha International"
            buttonText="Explore Spot"
            url="https://maps.app.goo.gl/1SN8iE1Mc58THr3d6"
            btnClass="show"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Slickcarousel;
