import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/style.css';
// import Charges from './components/Charges';
import NavBar from "./components/NavBar";
import Balance from "./components/Balance";
import Tracker from './components/Tracker';
import { Charts } from "./components/Charts";
import { Categories } from "./components/Categories";
import {
  Switch,
  Route,
} from "react-router-dom";


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
            <Switch>
            

              <div className="tab-content" id="v-pills-tabContent">
                {/* <article className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                         aria-labelledby="v-pills-home-tab">
                  <Tracker />
                </article> */}
                          <Route path="/money-tracker/" exact component={Tracker} />
                          <Route path="/money-tracker/charts" component={Charts} />
                          <Route path="/money-tracker/categories" component={Categories} />
                {/* <article className="tab-pane fade" id="v-pills-сharts" role="tabpanel"
                         aria-labelledby="v-pills-сharts-tab">
                </article> */}
                {/* <article className="tab-pane fade" id="v-pills-сategories" role="tabpanel"
                         aria-labelledby="v-pills-сategories-tab">
                </article> */}
              </div>
            </Switch>
            </main>

          </section>
        </div>
      </div>

  );
}

export default App;
