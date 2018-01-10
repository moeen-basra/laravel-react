import React from "react"

const displayName = "HomePageHeader"

function Header() {
  return <header className="bg-primary text-white">
    <div className="container text-center">
      <img width="125" height="125" src="/img/moeen.jpg" alt="..." className="rounded-circle" />
      <h1>Moeen Farooq Basra</h1>
      <p className="lead">Master in Information Technology</p>
      <p className="lead">Fullstack Developer at&nbsp;
        <a className="text-white"
           href="http://awok.com"
           target="_blank"
           rel="noreferrer noopener">Awok.com</a>
      </p>
      <p className="lead"><i className="fa fa-heart text-danger" />{`{ PHP, JavaScript, Python, MySQL, MongoDB }`}</p>
    </div>
  </header>
}
Header.displayName = displayName

export default Header
