import image1 from "../../assets/images/about_us/person.jpg"
import image2 from "../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <>
            <div className="hero mt-16">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="flex flex-col w-1/2 relative">
                        <img src={image1} className="rounded-lg w-4/5 h-[300px]" />
                        <img src={image2} className="rounded-lg w-2/3 absolute bottom-[-40px] right-0 border-[10px] border-white h-[200px]" />
                    </div>
                    <div className="w-1/2">
                        <p className="text-[#FF3811] font-bold font-inter mb-3">About Us</p>
                        <h1 className="text-4xl w-[300px] font-bold font-inter">We are qualified & of experience in this field</h1>
                        <p className="pt-6 font-inter text-slate-600">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p className="py-2 font-inter text-slate-600">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. .</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About