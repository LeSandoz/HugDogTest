import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './pages/Knowledge/Blog'
import ProductList from './pages/Product/ProductList'
import ProductPageDetail from './pages/Product/ProductPageDetail'
import Member from './pages/member/Member'
import Service from './pages/service/ServiceHome'
import Coupon from './pages/Marketing/Coupon'
import MemberLogin from './pages/member/memberLogin'
function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/member/:mId?">
            <Member />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/productlist">
            <ProductList />
          </Route>
          <Route path="/productpagedetail">
            <ProductPageDetail />
          </Route>
          <Route path="/coupon">
            <Coupon />
          </Route>
          <Route path="/login">
            <MemberLogin />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default App
