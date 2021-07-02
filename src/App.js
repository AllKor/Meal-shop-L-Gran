import React, {Suspense} from 'react'
import './App.scss';
import Header from './components/Header/Header'
import {Route, Switch} from 'react-router-dom'
import ReviewsContainer from './components/Reviews/ReviewsContainer'
import Intro from './components/Intro/Intro';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import BookingContainer from './components/Booking/BookingContainer';
import MenuContainer from './components/Menu/MenuContainer';
import CartComponent from './components/Cart/CartComponent';
import SidebarComponent from './components/Sidebar/SidebarComponent'

const Gallery = React.lazy(() => import('./components/Gallery/Gallery'))
const EmptyPage = React.lazy(() => import('./components/EmptyPage/EmptyPage'))
const Contact = React.lazy(() => import('./components/Contact/Contact'))

function App() {
  return (
    <div className="App">
      <Header />
      <SidebarComponent />
      <main className="App-main">
        <Suspense fallback={<span>Загрузка...</span>}>
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route  path="/about" component={About} />
            <Route  path="/blog" component={Blog} />
            <Route  path="/booking" component={BookingContainer} />
            <Route  path="/gallery" component={Gallery} />
            <Route  path="/contact" component={Contact} />
            <Route  path="/menu" component={MenuContainer} />
            <Route  path="/cart" component={CartComponent} />
            <Route  path="*" component={EmptyPage} />
          </Switch>
        </Suspense> 
        <ReviewsContainer />
      </main> 
      <Footer />
    </div>
  );
}

export default App;
