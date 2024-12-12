const Section = () => {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="/webforlearn-react-bootstrap/src/assets/WebVersion1.svg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Seereen Portfolio
            </h1>
            <p className="lead">
              Seereen Portfolio showcases Seereen&#39;s expertise in web
              development, highlighting a collection of projects that
              demonstrate skills in crafting dynamic, responsive, and visually
              engaging websites. The portfolio includes examples of front-end
              and back-end development, emphasizing a commitment to clean
              design, user-friendly interfaces, and functional, high-performance
              web applications tailored to client needs.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Frontend
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Backend
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
