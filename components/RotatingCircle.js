"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function RotatingCircle() {
    const circleRef = useRef(null);

    useEffect(() => {
        const circle = circleRef.current;
        const imageURLs = [
          "/images/orange.png",
          "/images/green.png",
          "/images/greenorange.png"
        ];

        // place icons
        const images = placeImages(imageURLs, circle);

        // Spin timeline — only rotate the circle
        const spin = gsap.timeline({ repeat: -1, defaults: { duration: 50, ease: "none" } })
            .to(circle, { rotation: 360 });


        // helper function: places icons around circle
        function placeImages(imageURLs, circle, size = circle.offsetWidth * 0.4) {
            let angleIncrement = (Math.PI * 2) / imageURLs.length,
                radius = circle.offsetWidth / 2,
                images = [],
                image,
                angle,
                i;

            for (i = 0; i < imageURLs.length; i++) {
                image = new Image();
                images.push(image);
                circle.appendChild(image);
                angle = angleIncrement * i;

                gsap.set(image, {
                    attr: { src: imageURLs[i] },
                    width: size,
                    height: size,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    xPercent: -50,
                    yPercent: -50,
                    transformOrigin: "50% 50%",
                    x: radius + Math.cos(angle) * radius,
                    y: radius + Math.sin(angle) * radius,
                });
            }
            return images;
        }
    }, []);

    return (
        <div className="flex justify-center items-center">
            <div
                ref={circleRef}
                className="main-circle relative border border-secondary rounded-full"
                style={{
                    width: "100px", // smaller circle
                    height: "100px",
                }}
            ></div>
        </div>
    );
}
