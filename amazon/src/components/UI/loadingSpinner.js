import "./loadingSpinner.css";
function LoadingSpinner() {
  console.log("loading Spinner");
  return (
    <div className="centeringLoadingSpinner">
      <div className="loading loading--full-height"></div>
    </div>
  );
}
export default LoadingSpinner;
