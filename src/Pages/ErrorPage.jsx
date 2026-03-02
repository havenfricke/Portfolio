import { useRouteError } from "react-router-dom";

export default function ErrorPage() {

    const error = useRouteError();
    console.error(error);
  
    return (
      <div className="row">
        <div>
          <h2>Oops! {error.status}</h2>
          <p className="small">
              {error.statusText}, {error.data || error.message}
          </p>
          <a href="/">Go back to the home page.</a>
        </div>
      </div>
    );
  }