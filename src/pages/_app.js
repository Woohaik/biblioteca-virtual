import '../styles/globals.css'
import "bootswatch/dist/Superhero/bootstrap.min.css";
import NavBar from "./../components/NavBar"
function MyApp({ Component, pageProps }) {
  return (<>
    <NavBar />
    <div className="container">
      <Component {...pageProps} />
    </div>
  </>)
}

export default MyApp
