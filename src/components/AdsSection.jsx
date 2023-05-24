const AdsSection = () => {
  return (
    <div className="bg-dark container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="ratio ratio-16x9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FRkHu_0kqbc?autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="col-md-6 text-light p-5">
          Our new Sony ZV-E1 is an interchangeable-lens vlog camera with a
          high-performance 35mm full-frame image sensor. Positioned at the top
          of Sony’s Vlog camera series, it gives creative vloggers who want to
          deliver the highest quality content all the advantages of Sony’s most
          advanced technology. In addition to an ideal blend of intuitive
          operation optimized for vlogging and compact, lightweight mobility,
          our ZV-E1 features Sony’s E-mount for compatibility with an extensive
          line of top-quality lenses, a 35mm full-frame sensor that can deliver
          cinematic imagery with wide latitude, low noise, and high sensitivity.
          The lightweight body offers outstanding mobility while refined
          operation gives vloggers maximum creative freedom.
        </div>
      </div>
    </div>
  );
};

export default AdsSection;
