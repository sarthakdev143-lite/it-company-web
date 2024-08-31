import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useGSAP(() => {
    const scroll = () => {
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
      window.scrollTo(0, 0);
    }

    const navLinkAnimate = () => {
      const tl = gsap.timeline()
      const elems1 = document.querySelectorAll(".animate1")
      const elems2 = document.querySelectorAll(".animate2")

      elems1.forEach(elem1 => {
        tl.from(elem1, {
          opacity: 0,
          y: -30,
          duration: 0.5,
        })
      })

      elems2.forEach(elem2 => {
        tl.from(elem2, {
          y: 100,
          duration: 0.5,
          scale: 0,
          scrollTrigger: {
            trigger: elem2,
            scroller: "body",
            start: "top 90%",
            markers: true
          }
        })
      })
    }

    const homepageAnimate = () => {
      const tl2 = gsap.timeline();

      tl2.from(".stagger1", {
        opacity: 0,
        y: -100,
        stagger: 0.15,
        ease: "slow(0.1,1,false)",
        delay: 0.15
      })

      tl2.from(".landing-text", {
        opacity: 0,
        y: 10,
        ease: "slow(0.1,1,false)",
      })
    }

    scroll();
    navLinkAnimate();
    homepageAnimate();

  }, [pathname])
  return null;
};

export default ScrollToTop;
