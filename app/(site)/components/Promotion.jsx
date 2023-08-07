"use client";
const Promotion = () => {
  return (
    <div className="container mt-md-5 mt-4 pt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="position-relative  text-white ">
            <img
              alt="Category"
              src="../../../img/promotion1.svg"
              className="w-100 h-100"
            />
            <div className="promotion-text">
              <h2 className="text-uppercase">formal woman</h2>
            </div>
          </div>
          <div className="position-relative  text-white mt-4 pt-3 ">
            <img
              alt="Category"
              src="../../../img/promotion2.svg"
              className="w-100 h-100"
            />
            <div className="promotion-text">
              <h2 className="text-uppercase">formal Men</h2>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="position-relative  text-white ">
            <img
              alt="Category"
              src="../../../img/promotion3.svg"
              className="w-100 h-100"
            />
            <div className="promotion-text">
              <h2 className="text-uppercase">Casual Style</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
