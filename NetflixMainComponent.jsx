

export default function NetflixMainComponent() {
    return (
      <div className="text-center text-white d-flex flex-column align-items-center justify-content-center main-container">
        <h1 className="main-title fw-bold">Unlimited movies, TV shows, and more.</h1>
        <h3 className="main-subtitle mt-2">Starts at ₹149. Cancel anytime.</h3>
        <p className="mt-3 fs-5">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="d-flex gap-2 mt-2">
          <input type="email" className="form-control p-2" placeholder="Enter your email" style={{ width: "300px" }} />
          <button className="btn btn-danger fw-bold px-4">Get Started &gt;</button>
        </div>
      </div>
    );
  }
  