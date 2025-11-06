// src/Components/Home/Home.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router";

const Home = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("/toyData.json")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div className="mt-5">
      <section className="mb-10">
        <Swiper
          navigation={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className="mySwiper rounded-2xl shadow-lg"
        >
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/SR3RQbRh/slaide-01.png"
              alt="Toy 1"
              object=""
              className="w-full  h-[300px] object-fit: cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/wBMBNBNm/sla2.jpg"
              alt="Toy 2"
              className="w-full h-[300px] object-fit: cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/FF0Rq7NP/12-Toy-Storage-Ideas-We-Love.png"
              alt="Toy 3"
              className="w-full h-[300px] object-fit: cover"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="text-center my-10">
        <h2 className="text-3xl font-bold text-pink-600 mb-6">Popular Toys</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5">
          {toys.map((toy) => (
            <div
              key={toy.id}
              className="card bg-base-100 shadow-xl hover:scale-105 transition"
            >
              <figure className="p-2 shadow-2xl">
                <img
                  src={toy.thumbnail}
                  alt={toy.toyName}
                  className="h-56 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-center">{toy.toyName}</h2>
                <p>⭐ Rating: {toy.rating}</p>
                <p>Available: {toy.availableQuantity}</p>
                <p className="font-bold text-pink-600">${toy.price}</p>
                <div className="card-actions justify-center">
                  <Link
                    to={`/toy/${toy.id}`}
                    className="btn btn-sm btn-primary "
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-pink-100 to-blue-100 py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Why Choose ToyTopia?
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://i.postimg.cc/gcD2SZHF/download-5.jpg"
              alt="Safe Toys"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Safe & High Quality</h3>
            <p className="text-gray-600 text-sm">
              Toys crafted from safe materials for worry-free playtime.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://i.postimg.cc/0NwNcXcT/download-3.jpg"
              alt="Creative Toys"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Creative & Fun</h3>
            <p className="text-gray-600 text-sm">
              Inspires creativity, imagination, and learning for kids.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://i.postimg.cc/DZkP69y8/download-8.jpg"
              alt="Fast Delivery"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">
              Quick and reliable delivery straight to your doorstep.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Happy  Customers of our service
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-xl shadow-lg">
            <img
              src="https://i.ibb.co/4pDNDk1/avatar.png"
              alt="Sarah J."
              className="w-20 h-20 rounded-full object-cover border-2 border-pink-400"
            />
            <div className="text-left md:text-left">
              <p className="text-gray-600 text-sm md:text-base">
                “ToyTopia helped me find unique toys my kids absolutely love!
                Great quality and super-fast delivery.”
              </p>
              <p className="font-semibold text-pink-600 mt-2">— Sarah J.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
