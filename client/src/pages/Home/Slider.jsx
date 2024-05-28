import slide1 from "../../assets/images/homeCarousel/1.jpg"
import slide2 from "../../assets/images/homeCarousel/2.jpg"
import slide3 from "../../assets/images/homeCarousel/3.jpg"
import slide4 from "../../assets/images/homeCarousel/4.jpg"
import 'animate.css';

const Slider = () => {
    return (
        <>
            <div className="carousel w-full mt-3 rounded-xl text-white">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slide1} className="w-full h-[70vh]" />
                    <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] left-0 top-0">
                        <div className="h-full flex items-center">
                            <div className="w-1/3 ml-10 my-auto">
                                <h2 className="text-4xl font-bold">Affordable Price for Car Servicing</h2>
                                <p className="mt-5">There are many variations of passages of  available, but the majority have suffered alteration in some form.</p>
                                <div className="mt-5">
                                    <button className="btn bg-[#FF3811] border-0 text-white w-[150px] mr-3">Discover More</button>
                                    <button className="btn bg-transparent border text-white w-[150px] mr-3 border-white">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slide2} className="w-full h-[70vh]" />
                    <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] left-0 top-0">
                        <div className="h-full flex items-center">
                            <div className="w-1/3 ml-10 my-auto">
                                <h2 className="text-4xl font-bold">Affordable Price for Car Servicing</h2>
                                <p className="mt-5">There are many variations of passages of  available, but the majority have suffered alteration in some form.</p>
                                <div className="mt-5">
                                    <button className="btn bg-[#FF3811] border-0 text-white w-[150px] mr-3">Discover More</button>
                                    <button className="btn bg-transparent border text-white w-[150px] mr-3 border-white">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slide3} className="w-full h-[70vh]" />
                    <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] left-0 top-0">
                        <div className="h-full flex items-center">
                            <div className="w-1/3 ml-10 my-auto">
                                <h2 className="text-4xl font-bold">Affordable Price for Car Servicing</h2>
                                <p className="mt-5">There are many variations of passages of  available, but the majority have suffered alteration in some form.</p>
                                <div className="mt-5">
                                    <button className="btn bg-[#FF3811] border-0 text-white w-[150px] mr-3">Discover More</button>
                                    <button className="btn bg-transparent border text-white w-[150px] mr-3 border-white">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={slide4} className="w-full h-[70vh]" />
                    <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] left-0 top-0">
                        <div className="h-full flex items-center">
                            <div className="w-1/3 ml-10 my-auto">
                                <h2 className="text-4xl font-bold">Affordable Price for Car Servicing</h2>
                                <p className="mt-5">There are many variations of passages of  available, but the majority have suffered alteration in some form.</p>
                                <div className="mt-5">
                                    <button className="btn bg-[#FF3811] border-0 text-white w-[150px] mr-3">Discover More</button>
                                    <button className="btn bg-transparent border text-white w-[150px] mr-3 border-white">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider