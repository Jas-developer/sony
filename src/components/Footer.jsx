const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <a href="mailto:example@example.com" className="text-white">
              <i className="fa fa-envelope mr-2 text-success"> Email</i>
            </a>
          </div>
          <div className="col  text-success">
            <a
              href="https://www.facebook.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <i className="fa fa-facebook-square mr-2 text-success">
                Facebook
              </i>
            </a>
          </div>
          <div className="col">
            <a
              href="https://www.twitter.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <i className="fa fa-twitter-square mr-2 text-success"> Twitter</i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
