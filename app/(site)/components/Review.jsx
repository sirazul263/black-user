"use client";
const Review = () => {
  return (
    <div className="container my-md-5 mt-4 py-5">
      <div className="text-center">
        <h1>
          WHAT OUR CLIENTS ARE <br /> SAYING
        </h1>
        <h1>“</h1>
      </div>
      <div className="row mt-4">
        <div className="col-3 d-flex justify-content-center">
          <div className="d-flex align-items-center justify-content-around">
            <p className="mb-0 cursor-pointer">PREV.</p>
            <div className="ms-md-5 ms-2 ">
              <svg
                width="2"
                height="45"
                viewBox="0 0 2 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_30_2109" fill="white">
                  <path d="M0.52002 0H1.52002V45H0.52002V0Z" />
                </mask>
                <path
                  d="M0.52002 0V45H2.52002V0H0.52002Z"
                  fill="black"
                  mask="url(#path-1-inside-1_30_2109)"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center text-center">
          <div>
            <p className="fs-14">
              Lorem ipsum is placeholder text commonly used in the graphic,
            </p>
            <div className="d-flex justify-content-center my-4">
              <img
                alt="reviewer"
                src="../../../img/reviewer.svg"
                className="img-fluid"
              />
            </div>
            <p>- Sami & Tasnim</p>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center">
          <div className="d-flex align-items-center justify-content-around">
            <div className="me-md-5  me-2">
              <svg
                width="2"
                height="45"
                viewBox="0 0 2 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_30_2109" fill="white">
                  <path d="M0.52002 0H1.52002V45H0.52002V0Z" />
                </mask>
                <path
                  d="M0.52002 0V45H2.52002V0H0.52002Z"
                  fill="black"
                  mask="url(#path-1-inside-1_30_2109)"
                />
              </svg>
            </div>
            <p className="mb-0 cursor-pointer">NEXT.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
