import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="user">
            MovieBooking
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="seats">
                  Seats
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="user" >
                  User
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="movies">
                  Movie
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="theater">
                  Theater
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="booking">
                  Booking
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="register">
                  Register User
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link class="nav-link" to="theaters">
                  Movies List
                </Link>
              </li> */}
              <li class="nav-item">
                <Link class="nav-link" to="movielist">
                  MovieList
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="theaters">
                  TheaterList
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="seat">
                  SeatList
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="users">
                  UserList
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;