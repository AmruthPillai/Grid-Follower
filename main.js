import "reset-css";
import "./style.scss";

import $ from "jquery";
import gsap from "gsap";

const $cursor = $("#cursor");
const $section = $("#container > section");

function followCursor(event) {
  gsap.to($cursor, {
    x: event.clientX,
    y: event.clientY,
  });
}

function coverShade() {
  const shade = $(".shade", this);

  gsap.to($cursor, { opacity: 0 });

  gsap.to(shade, {
    width: 800,
    height: 800,
    translateX: -400,
    translateY: -400,
  });
}

function uncoverShade() {
  const shade = $(".shade", this);

  gsap.to($cursor, { opacity: 1 });

  gsap.to(shade, {
    width: 0,
    height: 0,
    translateX: 0,
    translateY: 0,
  });
}

$(window).on("mousemove", followCursor);

$($section).on("mouseenter", coverShade);
$($section).on("mouseleave", uncoverShade);
