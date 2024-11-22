# Saxo Jazz DJs

.hero__container {
  background-image: url(./assets/Hero1600.webp);
  /* background-size: cover; */
  background-position: center -100px;
  height: auto;
  width: 100%;
  /* max-width: 1600px; */
  /* height: 100%; */
  max-height: 967px;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-top: 100px;
  padding-left: 100px;
  position: relative;

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    background-image: url(./assets/Hero1400.webp);
    max-height: none;
    width: 100%;
    height: auto;
    min-height: 935px;
    background-position: center -100px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    background-image: url(./assets/Hero1200.webp);
    width: 100%;
    height: auto;
    min-height: 701px;
    max-height: none;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    background-image: url(./assets/Hero992.webp);
    width: 100%;
    height: auto;
    min-height: 561px;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    background-image: url(./assets/Hero768.webp);
    width: 100%;
    height: auto;
    min-height: 312px;
    max-height: none;
  }

  @media only screen and (max-width: 576px) {
    background-image: url("./assets/Hero576.webp");
    /* max-width: 576px; */
    width: 100%;
    height: auto;
    /* max-height: 384px; */
    min-height: 284px;
    max-height: none;
    background-size: cover;
  }
}

.hero__container::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  opacity: 0;
  z-index: 0;
  @media only screen and (min-width: 992px) {
    opacity: 0.2;
  }
}