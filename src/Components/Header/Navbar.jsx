const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="/webforlearn-react-bootstrap/src/assets/Logo.svg"
              alt="SR_Dev"
              width="50"
              height="44"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Blog">
                  Blog
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Frontend
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item disabled">Language</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      HTML
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      CSS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      JAVASCRIPT
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item disabled">Frontend Framework</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      REACT
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item disabled">Css Framework</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      BOOTSTRAP
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      TAIWIND CSS
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Backend
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item disabled">Language</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      JAVASCRIPT
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      JAVA
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      C#
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      PYTHON
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      PHP
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item disabled">Framework</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      NODE.JS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      SPRING BOOT
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      ASP.NET CORE
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      DJANGO
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      LARAVEL
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contract">
                  Contract
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
