import React from "react";
import ImageHero from "assets/images/picture.png";
import ImageHero_ from "assets/images/frame.png";
import IconTraveler from "assets/images/icons/ic_traveler.svg";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTreasure from "assets/images/icons/ic_treasure.svg";
import formatNumber from "utils/formatNumber";

import Button from "elements/Button";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className={"container pt-4"} style={{ width: "100%" }}>
      <div className="row align-items-center">
        <div className="col-auto pe-5" style={{ width: 500 }}>
          <h1 className="fw-bold line-height-a mb-3">
            Forget busy Work,
            <br /> Start next Vacation
          </h1>
          <p className="mb-4 font-weight-light text-gray-500  w-75">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className={"btn px-5"}
            hasShadow
            isPrimary
            onclick={showMostPicked}
          >
            Show me Now
          </Button>
          <div className="row " style={{ marginTop: 60 }}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                src={IconTraveler}
                alt={`${props.data.travelers}`}
                width="36"
                height={"36"}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.travelers)}{" "}
                <span className="text-gray-500 font-weight-light">
                  traveler
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                src={IconTreasure}
                alt={`${props.data.treasures}`}
                width="36"
                height={"36"}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.treasures)}{" "}
                <span className="text-gray-500 font-weight-light">
                  treasure
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                src={IconCities}
                alt={`${props.data.cities}`}
                width="36"
                height={"36"}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.cities)}{" "}
                <span className="text-gray-500 font-weight-bold">cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-6 ms-auto pe-0 me-0">
          <div
            className={"ms-auto"}
            style={{
              width: 550,
              height: 350,
              paddingRight: 0,
              marginRight: 0,
            }}
          >
            <img
              src={ImageHero}
              alt="Room with couches"
              style={{ margin: "-50px 0 0 -50px", zIndex: 1 }}
              className="img-fluid position-absolute"
            />
            <img
              src={ImageHero_}
              alt="Room with couches frame"
              style={{ margin: "0 -15px -15px 0" }}
              className="img-fluid position-absolute"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
