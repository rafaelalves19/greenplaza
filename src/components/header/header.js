import "../../styles/scss/_main.scss";
import Nav from "./nav/nav";
import React, { useEffect, useState } from "react";
import Container from "../container/container";
import { motion } from "framer-motion";

function Header() {
  const [headerScroll, setHeaderScroll] = useState("header");

  const listenScrollEvent = () => {
    if (window.scrollY < 70) {
      return setHeaderScroll("header");
    } else if (window.scrollY > 70) {
      return setHeaderScroll("header__scroll");
    }
  };

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <motion.header
      key={"header"}
      initial="initial"
      animate="animate"
      className={headerScroll}
      variants={variants}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Container>
        <section>
          <a href="/">
            <img src="images/logo.svg" alt="logo" />
          </a>
          <Nav />
        </section>
      </Container>
    </motion.header>
  );
}

export default Header;
