import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light position-fixed top-0 start-0 w-100 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            FinTrack
          </a>
          <div className="d-flex">
            <button
              className="btn btn-primary d-lg-none me-2"
              style={{ backgroundColor: "#8231d3", borderColor: "#8231d3" }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="bi bi-plus-lg" />
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/dashboard"}>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/transaction"}>
                  Transactions
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className="btn btn-primary btn-default btn-squared btn-shadow-primary d-none d-lg-inline"
                  style={{ backgroundColor: "#8231d3", borderColor: "#8231d3" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="bi bi-plus-lg me-1" />
                  New Transaction
                </button>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  jp0027006@gmail.com
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      <i class="bi bi-person me-1"></i>
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i class="bi bi-box-arrow-right me-1"></i>
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-4">
                <div className="d-flex mb-4">
                  <div className="flex-grow-1">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Add New Transaction
                    </h1>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div className="space-y-2">
                      <label
                        className="form-label text-sm font-medium d-block"
                        htmlFor="paymentType"
                      >
                        Description
                      </label>
                      <input
                        type="text"
                        className="form-control h-100 rounded-md border bg-light px-3 py-2 text-sm"
                        placeholder="e.g. Salary"
                        id="paymentType"
                        aria-describedby="paymentType-description"
                        aria-invalid="false"
                        name="paymentType"
                      />
                    </div>
                  </div>
                </div>
                <div className="row row-cols-3 g-2 mb-4">
                  <div className="col">
                    <div className="space-y-2">
                      <label
                        className="form-label text-sm font-medium d-block"
                        htmlFor="paymentType"
                      >
                        Payment Type
                      </label>
                      <input
                        type="text"
                        className="form-control h-100 rounded-md border bg-light px-3 py-2 text-sm"
                        placeholder="e.g. Credit Card"
                        id="paymentType"
                        aria-describedby="paymentType-description"
                        aria-invalid="false"
                        name="paymentType"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="space-y-2">
                      <label
                        className="form-label text-sm font-medium d-block"
                        htmlFor="category"
                      >
                        Category
                      </label>
                      <div className="dropdown">
                        <button
                          className="btn btn-outline-secondary border bg-light dropdown-toggle w-100"
                          type="button"
                          id="categoryDropdown"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ color: "#6c757d" }}
                        >
                          Category
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="categoryDropdown"
                        >
                          <li>
                            <a className="dropdown-item" href="#" value="">
                              Select Category
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              value="INCOME"
                            >
                              💰 Income
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              value="EXPENSE"
                            >
                              💸 Expense
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              value="INVESTMENT"
                            >
                              📈 Investment
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="space-y-2">
                      <label
                        className="form-label text-sm font-medium d-block"
                        htmlFor="amount"
                      >
                        Amount
                      </label>
                      <input
                        type="number"
                        className="form-control h-100 rounded-md border bg-light px-3 py-2 text-sm"
                        placeholder="e.g. 100"
                        id="amount"
                        aria-describedby="amount-description"
                        aria-invalid="false"
                        name="amount"
                      />
                    </div>
                  </div>
                </div>
                <div className="row g-2">
                  <div className="col">
                    <div className="space-y-2">
                      <label
                        className="form-label text-sm font-medium d-block"
                        htmlFor="location"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        className="form-control h-100 rounded-md border bg-light px-3 py-2 text-sm"
                        placeholder="e.g. Credit Card"
                        id="location"
                        aria-describedby="paymentType-description"
                        aria-invalid="false"
                        name="location"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="space-y-2">
                      <label
                        className="form-label text-sm font-medium d-block"
                        htmlFor="date"
                      >
                        Transaction Date
                      </label>
                      <input
                        type="date"
                        className="form-control h-100 rounded-md border bg-light px-3 py-2 text-sm"
                        id="date"
                        aria-describedby="amount-description"
                        aria-invalid="false"
                        name="date"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-grid gap-2 col-12 mx-auto ps-4 pe-4 mb-4">
                <button
                  className="btn btn-primary"
                  type="button"
                  style={{
                    backgroundColor: "#8231d3",
                    borderColor: "#8231d3",
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Navbar;
