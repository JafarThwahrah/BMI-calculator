import React from "react";

const Header = ()=>{
    return (
      <div>
        <nav class="navbar bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="React.com">
              <img
                src="../logo192.png"
                alt="Logo"
                width="30"
                height="24"
                class="d-inline-block align-text-top"
              />
              React
            </a>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  
}

export default Header;
