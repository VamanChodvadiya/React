const LoadingSpinner = () => {
  return (
    <center>
      <div className="d-flex justify-content-center spinner ">
        <div
          className="spinner-border spinner"
          role="status"
          style={{ width: "5rem", height: "5rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </center>
  );
};
export default LoadingSpinner;
