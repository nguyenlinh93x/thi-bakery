import React, { useRef, useEffect, useCallback, useMemo } from "react";
import "./styles.less";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { useWindowSize } from "components";
import { LandingPagePath } from "App";

const productDetailRegex = /product\/.+\/.*/;

export const Header = () => {
  const location = useLocation();
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLUListElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const windowSize = useWindowSize();

  const isProductDetail = useCallback(
    () => productDetailRegex.test(location.pathname),
    [location.pathname]
  );

  const isLandingPage = useCallback(
    () => location.pathname === LandingPagePath,
    [location.pathname]
  );

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const mobileMenu = mobileMenuRef.current;
    const header = headerRef.current;

    if (hamburger && mobileMenu && header) {
      if (isLandingPage()) {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          if (scrollPosition > 250) {
            header.style.opacity = "1";
          } else {
            header.style.opacity = "0";
          }
        };
        if (windowSize.width && windowSize.width >= 1200) {
          header.style.opacity = "0";

          document.addEventListener("scroll", handleScroll);
        } else {
          document.removeEventListener("scroll", handleScroll);
          header.style.opacity = "1";
        }
        return () => {
          document.removeEventListener("scroll", handleScroll);
        };
      }
      // else if (isProductDetail()) {
      //   header.style.backgroundColor = "crimson";
      // }
    }
  }, [isLandingPage, windowSize]);

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const mobileMenu = mobileMenuRef.current;
    const header = headerRef.current;

    if (hamburger && mobileMenu && header) {
      if (isProductDetail()) {
        header.className = "header primary";
      }

      const handleHamburgerClick = (e: MouseEvent) => {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
      };
      const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (!isProductDetail()) {
          if (scrollPosition > 250) {
            header.className = "header primary";
          } else {
            header.className = "header transparent";
          }
        } else {
          if (scrollPosition === 0 || scrollPosition > 750) {
            header.className = "header primary";
          } else {
            header.className = "header transparent";
          }
        }
      };

      hamburger.addEventListener("click", handleHamburgerClick);
      document.addEventListener("scroll", handleScroll);

      return () => {
        hamburger.removeEventListener("click", handleHamburgerClick);
        document.removeEventListener("click", handleScroll);
      };
    }
  }, [windowSize, isProductDetail]);

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
                  <Link
                    to="/"
                    data-after="BÁNH CÙNG THỊ NHA"
                    onClick={mobileLinkClick}
                  >
                    BÁNH CÙNG THỊ NHA
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    data-after="LÀM BÁNH CÙNG THỊ"
                    onClick={mobileLinkClick}
                  >
                    LÀM BÁNH CÙNG THỊ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    data-after="MỘT CHÚT VỀ THỊ"
                    onClick={mobileLinkClick}
                  >
                    MỘT CHÚT VỀ THỊ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    data-after="KẾT NỐI THỊ NÀO"
                    onClick={mobileLinkClick}
                  >
                    KẾT NỐI THỊ NÀO
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
