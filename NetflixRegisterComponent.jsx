export default function NetflixRegisterComponent() {
    return (
      <div className="text-center mt-4">
        <p className="register-title fs-5 text-white">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="d-flex justify-content-center flex-wrap gap-2">
          <input 
            type="email" 
            placeholder="Email address" 
            className="form-control p-3" 
            style={{ maxWidth: "350px" }} 
          />
          <button className="btn btn-danger px-4 fw-bold">
            Get Started &nbsp;
            <span className="bi bi-chevron-right"></span>
          </button>
        </div>
      </div>
    );
  }
  