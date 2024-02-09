import Slider from "react-slick";
import PackageCard from "./PackageCard";
import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";
const PackageSlider = ({ packages }) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
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
    <div className=" mx-auto container my-4">
      <Slider {...settings}>
        {packages?.map((item) => (
          <PackageCard key={item?._id} data={item} />
        ))}
          <div className="flex flex-col justify-between gap-4 text-right border min-h-[400px] border-gray h-full mx-2  px-4 pb-4 rounded-2xl">
      <div>
        {" "}
        <h2 className="text-2xl py-3 w-fit ml-auto border-t-gold border-t">
        profits package
        </h2>
        <h3 className="text-2xl font-bold text-gold py-3 border-y border-y-[#ffff] my-2">
      free
        </h3>
        <h2 className="text-base my-3">
         
<div>١.توصيات مجانية 
لمدة شهر </div>
<div>
٢.مكالمات تحليل الاسواق لايف شهريا على نظام ال
</div>
<div>sk & smc</div>

<div>٣.قناة خاصة بالاخبار و تحليل الخبر قبل و بعد صدوره 
مدة الحياة</div>
        </h2>
        <div className="flex flex-col gap-4 border-dashed border-b-2 border-b-gray py-2">
 
        </div>
      </div>
      <div>
 
        <a
        href="https://t.me/WM_Assistant"
        target="_blank"
          className="flex justify-between items-center border-gold text-gold mt-3 border-[1px] px-3 py-2 rounded-xl"
        >
          <div className="w-5 h-5 bg-gold text-dark rounded-full flex items-center justify-center">
            <i className="fa-solid fa-arrow-left text-base"></i>
          </div>
          <span>انضم الينا الأن</span>
        </a>
      </div>
    </div>
      </Slider>
      <div className="flex justify-center gap-10">
        <img
          src={arrow}
          className="h-36 md:h-44 lg:h-48 rotate-180 cursor-pointer"
          onClick={() => {
            document.querySelector(".slick-next")?.click();
          }}
          alt=""
        />
        <img
          src={arrow}
          onClick={() => {
            document.querySelector(".slick-prev")?.click();
          }}
          className="h-36 md:h-44 lg:h-48 cursor-pointer"
          alt=""
        />
      </div>
    </div>
  );
};

export default PackageSlider;
