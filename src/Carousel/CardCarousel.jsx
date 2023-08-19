import Carousel from "react-multi-carousel";
import "./carousel.css";
import banner1 from "../assets/port-2.webp"
import banner2 from "../assets/port-3.webp"
import banner3 from "../assets/port-4.webp"
import banner4 from "../assets/astrolo_6.webp"

const CardCarousel = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 428 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 428, min: 0 },
      items: 1,
    }
  };


  return (
    <>
      <Carousel className="hidden md:block overflow-hidden gap-4"
        PrevtIcon
        NextIcon
        additionalTransfrom={0}
        containerClass="banner-carousel"
        arrows
        draggable
        focusOnSelect={false}
        slidesToSlide={1}
        removeArrowOnDeviceType={["mobile"]}
        autoPlay
        infinite
        itemClass=""
        // minimumTouchDrag={80}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind
        responsive={responsive}
        customLeftArrow={<h1 className="arrow">{`<`}</h1>}
        customRightArrow={<h1 className="arrow">{`>`}</h1>}
      >
        <div className="card ">
          <div className="w-[520px]">
            <img src={banner1} alt="" />
          </div>
          <div className="text-left">
            <h1 className="py-4">Heading</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum minima repellendus animi soluta quis laudantium aliquid tempora fuga aperiam.</p>
          </div>
        </div>
        <div className="card">
          <div className="w-[520px]">
            <img src={banner2} alt="" />
          </div>
          <div className="text-left">
            <h1 className="py-4">Heading</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum minima repellendus animi soluta quis laudantium aliquid tempora fuga aperiam.</p>
          </div>
        </div>
        <div className="card">
          <div className="w-[520px]">
            <img src={banner3} alt="" />
          </div>
          <div className="text-left">
            <h1 className="py-4">Heading</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum minima repellendus animi soluta quis laudantium aliquid tempora fuga aperiam.</p>
          </div>
        </div>
        <div className="card">
          <div className="w-[520px]">
            <img src={banner4} alt="" />
          </div>
          <div className="text-left">
            <h1 className="py-4">Heading</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum minima repellendus animi soluta quis laudantium aliquid tempora fuga aperiam.</p>
          </div>
        </div>

      </Carousel>
    </>
  )
}

export default CardCarousel