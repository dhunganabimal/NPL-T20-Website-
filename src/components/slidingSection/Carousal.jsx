import { useEffect, useState, useRef } from "react";
import "./Carousal.css";

function Carousel({ children }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselBoxRef = useRef();

    const intervalRef = useRef(0);

    useEffect(() => {
        // get the images, and show the first image
        const { slides } = getSlidesInfo();
        slides[0].setAttribute("data-active", "true");

        startSlider();
    }, []);

    function startSlider() {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => {
                const { slides, count } = getSlidesInfo();

                const newIndex = prev === count - 1 ? 0 : prev + 1;


                [...slides].forEach((slide, index) => {
                    slide.setAttribute("data-active", index === newIndex);
                });

                return newIndex;
            });
        }, 3500);
    }

    function handlePrevious() {
        // stop interval
        clearInterval(intervalRef.current);

        const { slides, count } = getSlidesInfo();

        const newIndex = currentIndex === 0 ? count - 1 : currentIndex - 1;

        [...slides].forEach((slide, index) => {
            slide.setAttribute("data-active", index === newIndex);
        });

        startSlider();

        setCurrentIndex(newIndex);
    }

    function handleNext(event) {
        // stop interval
        clearInterval(intervalRef.current);

        const { slides, count } = getSlidesInfo();

        const newIndex = currentIndex === count - 1 ? 0 : currentIndex + 1;

        event.target.setAttribute("aria-controls", `slideImg${newIndex}`);

        [...slides].forEach((slide, index) => {
            slide.setAttribute("data-active", index === newIndex);
            slide.setAttribute(
                "aria-hidden",
                index === newIndex ? undefined : "true"
            );
        });

        startSlider();

        setCurrentIndex(newIndex);
    }

    function getSlidesInfo() {
        const carouselBox = carouselBoxRef.current;
        const slides = carouselBox.children;
        const count = slides.length;

        return { slides, count };
    }

    function handleStepperClick(newIndex) {
        return () => {
            // stop interval
            clearInterval(intervalRef.current);

            const { slides } = getSlidesInfo();

            [...slides].forEach((slide, index) => {
                slide.setAttribute("data-active", index === newIndex);
            });

            startSlider();

            setCurrentIndex(newIndex);
        };
    }

    function handleMouseEnter() {
        clearInterval(intervalRef.current);
    }

    function handleMouseLeave() {
        startSlider();
    }

    return (
        <div className="carousel">

            <span role="status" aria-live="polite" id="xyz"></span>
            <section
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={carouselBoxRef}
                className="box"
                aria-label="Sliding Images"
                tabIndex={0}
                onFocus={() => {}}
            >
                {children}
            </section>

            <button className="next" onClick={handleNext}>
                Next
            </button>

            <button className="prev" onClick={handlePrevious}>
                Prev
            </button>


        </div>
    );
}

export default Carousel;