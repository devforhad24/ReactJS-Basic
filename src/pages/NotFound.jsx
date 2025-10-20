import { useRouteError } from "react-router-dom";
const NotFound = () => {
  const error = useRouteError();
  console.log(error)
  return (
    <>
      {error && (
        <div id="error-page">
          <h1>Opps!</h1>
          <p>Sorry, an unexpected error has occureed</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      )}
    </>
  )
}

export default NotFound
