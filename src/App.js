import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/style.css';
import Charges from './components/Charges';
import NavBar from "./components/NavBar";
import Balance from "./components/Balance";

function App() {
  return (
      <div className="container-fluid">
        <div className="row">
          <section className="col-2 navBar">
            <NavBar/>
          </section>

          <section className="col-10 content">
            <header className='container'>
              <Balance/>
            </header>

            <main className='container'>
              <div className="tab-content" id="v-pills-tabContent">
                <article className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                         aria-labelledby="v-pills-home-tab">Page Home
                  <Charges />
                </article>
                <article className="tab-pane fade" id="v-pills-сharts" role="tabpanel"
                         aria-labelledby="v-pills-сharts-tab">Page Charts
                </article>
                <article className="tab-pane fade" id="v-pills-сategories" role="tabpanel"
                         aria-labelledby="v-pills-сategories-tab">Page Categories
                </article>
              </div>
            </main>

          </section>
        </div>
      </div>
  );
}

export default App;
