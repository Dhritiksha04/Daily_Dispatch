import './style.css'

export default function Navbar({setCategory}) {
  return (
    <nav className="navbar navbar-expand-md bg-body-light border-bottom sticky-top" data-bs-theme="dark">
    <div className="container-fluid">
     <a className="navbar-brand" href="/"><i className="fa-solid fa-shekel-sign"></i></a>
     <b><a className="nav-name" onClick={() => setCategory("general")}>DailyDispatch</a></b>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
          <div className="nav-link" onClick={() => setCategory("technology")} >Technology</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={() => setCategory("business")}>Business</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={() => setCategory("health")}>Health</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={() => setCategory("sports")}>Sports</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={() => setCategory("science")}>Science</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</div>
        </li>

      </ul>
    </div>
  </div>
</nav>
  )
}


  
