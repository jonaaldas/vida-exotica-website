import { Card, Button } from 'react-bootstrap'
import '../Menu/Menu.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Menu() {
  return (

    <Card className="text-white">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='swiper-img' src="https://i.imgur.com/VnAPQMC.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiper-img' src="https://images.unsplash.com/photo-1498654831517-895a5dfe4edc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiper-img' src="https://images.unsplash.com/photo-1498654831517-895a5dfe4edc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </SwiperSlide>


      </Swiper>
      <div className="other-pictures-menu">
        <div className="inner-other-pictures-menu">
          <img src="https://images.unsplash.com/photo-1498654831517-895a5dfe4edc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          <img src="https://images.unsplash.com/photo-1511978293554-7b92f19bd77d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          <img src="https://images.unsplash.com/photo-1499186024912-c374ac2e9cb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
      </div>
      <div className='card-menu-cont'>
        <Card.Title>Menu</Card.Title>
        <Card.Text>
          Mira nuestra opciones
        </Card.Text>
        <Button>Menu</Button>
      </div>

    </Card>
  );
}

export default Menu;