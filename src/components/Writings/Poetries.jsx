import { useState } from 'react';
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

        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    return (
        <>
            <SubSectionContainer>
                <h2>I'm also into writing 🖋️</h2>
                <p>Here are some of my poetries:</p>
                <section style={{ margin: '4px' }}>
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
