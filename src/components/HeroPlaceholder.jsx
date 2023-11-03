const HeroPlaceholder = () => {
  return (
    <div className="carousel-item active" data-bs-interval="5000">
      <img
        src=""
        className="d-block w-100 hero"
        alt="Backdrop placeholder"
      />
      <div className="caption container row align-items-center justify-content-between ">
        <h1 className="caption--hero-title text-center text-danger shadow p-5 bg-body-tertiary rounded bg-warning-subtle"
		>
          Login To Watch !!
        </h1>
      </div>
    </div>
  );
};

export default HeroPlaceholder;
