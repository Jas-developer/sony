import featured from "../assets/b.png";
import Lense from "../assets/LenseFeatured.png";

const Featured = () => {
  return (
    <div className="bg-light mt-2">
      <div className="bg-light">
        <h1 className="text-light">Sony</h1>
      </div>
      <div className="row">
        <div className="col-md-6 mt-2">
          <div className="card bg-dark" id="featured-card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-7 text-center">
                  <img src={featured} alt="" className="img-fluid" />
                </div>
                <div className="col-md-5">
                  <h5 className="card-title">Featured Post</h5>
                  <p className="card-text text-success">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-2">
          <div className="card" id="featured-card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-7 text-center">
                  <img src={Lense} alt="" className="img-fluid" />
                </div>
                <div className="col-md-5">
                  <h5 className="card-title">Featured Post</h5>
                  <p className="card-text text-success">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-light">Sony</h1>
      </div>
    </div>
  );
};

export default Featured;
