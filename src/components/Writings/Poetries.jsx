import { useState } from 'react';
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { SubSectionContainer } from "../shared/Container/Container";
import SpiralBook from "../shared/SpiralBook/SpiralBook";
const Poetries = () => {
    const [sliderRef, setSliderRef] = useState(null);

    const sliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
    }

    return (
        <>
            <SubSectionContainer>
                <h2>I'm also into writing 🖋️</h2>
                <p>Here are some of my poetries:</p>
                <section style={{ margin: '4px', display: 'flex', gap: '20px', paddingBottom: '20px' }}>
                    {/* <button style={{ width: '10px', height: '10px' }} onClick={sliderRef?.slickPrev}>
                    <AiOutlineArrowLeft />
                </button>
                <button style={{ width: '10px', height: '10px' }} onClick={sliderRef?.slickNext}>
                    <AiOutlineArrowRight />
                </button> */}
                    <Slider ref={setSliderRef}  {...sliderSettings}>
                        <SpiralBook title={"A"} />
                        <SpiralBook title={"B"} />
                        <SpiralBook title={"C"} />
                        <SpiralBook title={"D"} />
                        <SpiralBook title={"E"} />
                    </Slider>
                </section>
            </SubSectionContainer>



        </>
    );
};

export default Poetries;
