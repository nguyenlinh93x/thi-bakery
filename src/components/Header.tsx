import React, { useRef, useEffect } from "react";
import "./styles.less";
import { Link } from "react-router-dom";

export const Header = () => {
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLUListElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const mobileMenu = mobileMenuRef.current;
    const header = headerRef.current;
    if (hamburger && mobileMenu && header) {
      hamburger.addEventListener("click", (e) => {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
      });
      document.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 250) {
          header.style.backgroundColor = "#29323c";
        } else {
          header.style.backgroundColor = "transparent";
        }
      });
    }
  }, []);

  const mobileLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const hamburger = hamburgerRef.current;
    const mobileMenu = mobileMenuRef.current;
    if (hamburger && mobileMenu) {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    }
  };

  return (
    <>
      <section id="header">
        <div ref={headerRef} className="header container">
          <div className="navbar">
            <div className="brand">
              <img
                alt=""
                className="logo"
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/79307449_3328645353820842_160945127688423750_o.png?_nc_cat=108&_nc_sid=09cbfe&_nc_oc=AQmAYU_4eaJYVtzF78LvqCOSEILlXA4YNaxhSBYEu6EgdZMnvMkYuwMUcFHFwRVw5CM&_nc_ht=scontent.fsgn2-3.fna&oh=ae8d79e7d2b0ea2923db490ead4cfcc0&oe=5F358640"
              />
              {/* <a href="#hero">
                <h1>
                  <span>S</span>haif <span>A</span>rfan
                </h1>
              </a> */}
            </div>
            <div className="nav-list">
              <div ref={hamburgerRef} className="hamburger">
                <div className="bar"></div>
              </div>
              <ul ref={mobileMenuRef}>
                <li>
                  <Link to="/" data-after="Home" onClick={mobileLinkClick}>
                    Trang chủ
                  </Link>
                </li>
                {/* <li>
                  <Link to="/menu" data-after="Menu" onClick={mobileLinkClick}>
                    Menu
                  </Link>
                </li> */}
                <li>
                  <a href="#" data-after="Blog" onClick={mobileLinkClick}>
                    Blog
                  </a>
                </li>
                {/* <li>
                  <a href="#" data-after="About" onClick={mobileLinkClick}>
                    About
                  </a>
                </li> */}
                <li>
                  <a href="#" data-after="Contact" onClick={mobileLinkClick}>
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
