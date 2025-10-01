// src/components/HeroSliderEmbla.jsx
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Desktop images
import slider1 from "../images/fourthhero.png";
import slider3 from "../images/fifthhero.png";
import slider4 from "../images/tenthhero.png";
import slider5 from "../images/sixthhero.png";
import slider6 from "../images/seventhhero.png";
import slider7 from "../images/secondhero.png";
import slider2 from "../images/thirdhero.png";
import slider8 from "../images/eighthero.png";
import slider9 from "../images/firsthero.png";

// Mobile images (match order above)
import slider1m from "../images/fourthmobile.png";
import slider2m from "../images/thirdmobile.png";
import slider3m from "../images/fifthmobile.png";
import slider4m from "../images/tenthmobile.png";
import slider5m from "../images/sixthmobile.png";
import slider6m from "../images/seventhmobile.png";
import slider7m from "../images/secondmobile.png";
import slider8m from "../images/eightmobile.png";
import slider9m from "../images/firstmobile.png";

// Desktop
const DEFAULT_IMAGES_DESKTOP = [
    slider3,
    slider7,
    slider4,
    slider5,
    slider1,
    slider2,
    slider9,
    slider8,
    slider6,
];

// Mobile (matching order)
const DEFAULT_IMAGES_MOBILE = [
    slider3m,
    slider7m,
    slider4m,
    slider5m,
    slider1m,
    slider2m,
    slider9m,
    slider8m,
    slider6m,
];



export default function HeroSliderEmbla({
    images = DEFAULT_IMAGES_DESKTOP,
    imagesMobile = DEFAULT_IMAGES_MOBILE,
    joinHref = "/register",
}) {
    const [selected, setSelected] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, dragFree: false, align: "start" },
        [Autoplay({ delay: 5000, stopOnInteraction: true })]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelected(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    const scrollTo = (i) => emblaApi && emblaApi.scrollTo(i);

    return (
        <section className="w-full bg-black relative h-[400px] md:h-[450px]">
            <div className="w-full flex justify-center">
                {/* Responsive wrapper: full width on mobile, max 1000px on larger screens */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[70px] sm:top-[140px] z-10 w-[100%] max-w-[1100px]">
                    {/* SLIDER */}
                    <div className="relative w-full h-[400px] md:h-[430px] overflow-hidden rounded-none">
                        <div className="embla h-full" ref={emblaRef}>
                            <div className="embla__container flex h-full">
                                {images.slice(0, 9).map((src, idx) => {
                                    const mobileSrc = imagesMobile[idx] || src;
                                    return (
                                        <div className="embla__slide flex-[0_0_100%] h-full" key={idx}>
                                            <picture>
                                                {/* Use mobile image on small screens */}
                                                <source media="(max-width: 768px)" srcSet={mobileSrc} />
                                                {/* Fallback to desktop */}
                                                <img
                                                    src={src}
                                                    alt={`Slide ${idx + 1}`}
                                                    className="h-full w-full md:object-center"
                                                    loading="lazy"
                                                />
                                            </picture>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Dots inside the image at the bottom */}
                        <div className="pointer-events-auto absolute inset-x-0 bottom-3 z-10 flex items-center justify-center gap-2">
                            {images.slice(0, 9).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => scrollTo(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                    className={`h-2.5 w-2.5 border border-white/70 ${selected === i ? "bg-[#a3855e]" : "bg-transparent"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* GOLD BAR – sits flush to slider */}
                    <div className="w-full h-[50px] bg-[#a3855e] -mt-px">
                        <div className="h-full flex items-center justify-end px-4 sm:px-6">
                            <a
                                href={joinHref}
                                className="inline-flex items-center gap-2 text-white"
                            >
                                <span>Join the Revolution</span>
                                <svg
                                    className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M5 12h14" />
                                    <path d="M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Existing spacer preserved */}
            <div className="w-full h-[174px]" />
        </section>
    );
}
