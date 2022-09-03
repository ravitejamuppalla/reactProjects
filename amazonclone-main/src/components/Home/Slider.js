import classes from "./Slider.module.css";
function Slider() {
  return (
    <section class="section" id="section--3">
      <div class="section__title section__title--testimonials">
        <h2 class="section__description">Not sure yet?</h2>
        <h3 class="section__header">
          Millions of Bankists are already making their lifes simpler.
        </h3>
      </div>

      <div class={classes.slider}>
        <div class={classes.slide}>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/media/AugART_2022/Rec_PC_Hero_3000x1200_PEA_Media_Aug_Art_2022._CB630839000_.jpg"
            alt="Photo 1"
          />
        </div>
        <div class={classes.slide}>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Xiaomi/RedmiNote11T/GW/AUGART/PEA/D52889926_INWLD_AugART_RedmiNote11T_PC_Hero_3000x1200._CB630839998_.jpg"
            alt="Photo 2"
          />
        </div>
        <div class={classes.slide}>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Augart/LD/Aug_shop-now_PC_Hero_3000x1200._CB630944569_.jpg"
            alt="Photo 3"
          />
        </div>
        <div class={classes.slide}>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/TVs/BAU/Kamya/AugART22/D53186125_IN_HETV_AugART22_GW_Rec_PC_Hero_3000x1200_PEA_2._CB631132793_.jpg"
            alt="Photo 4"
          />
        </div>

        <button class={classes["slider__btn slider__btn--left"]}>&larr;</button>
        <button class={classes["slider__btn slider__btn--right"]}>
          &rarr;
        </button>
        <div class={classes.dots}></div>
      </div>
    </section>
  );
}

export default Slider;
