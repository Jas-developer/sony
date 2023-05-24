const AdsSection = () => {
  return (
    <div className="bg-dark container-fluid">
      <div className="row">
        <div className="col-md-6 p-5">
          <div className="ratio ratio-16x9 embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/FRkHu_0kqbc?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="col-md-6 p-5">
          <div className="text-success">
            Our new Sony ZV-E1 is an interchangeable-lens vlog camera with a
            high-performance 35mm full-frame image sensor. Positioned at the top
            of Sony’s Vlog camera series, it gives creative vloggers who want to
            deliver the highest quality content.
          </div>
          <div className="row p-5">
            <div className="col-md-6 bg-warning">
              <h1 className="text-center">First row</h1>
            </div>
            <div className="col-md-6 p-5 bg-primary">
              <h1 className="text-center">Second row</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsSection;
