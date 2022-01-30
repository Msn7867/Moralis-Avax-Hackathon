import { useEffect } from 'react'
import { useMoralis } from 'react-moralis'
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './App.css';
import cat from 'components/imgassets/banner.jpeg';
import blob from 'components/imgassets/blob.png';
import home from 'components/home';
import { Link } from 'react-router-dom';
import {
BrowserRouter as Router,
Switch,
Route,
NavLink,
Redirect,
} from 'react-router-dom'
import Account from 'components/Account'
import Chains from 'components/Chains'
import TokenPrice from 'components/TokenPrice'
import ERC20Balance from 'components/ERC20Balance'
import ERC20Transfers from 'components/ERC20Transfers'
import InchDex from 'components/InchDex'
import NFTBalance from 'components/NFTBalance'
import Wallet from 'components/Wallet'
import { Menu, Layout } from 'antd'
import 'antd/dist/antd.less'
import Blockie from 'components/Blockie'
import NativeBalance from 'components/NativeBalance'
import './style.less'
import QuickStart from 'components/QuickStart'
import Contract from 'components/Contract/Contract'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
<Route path="/home" component= {home} /> 


const App = () => {
return (
<Router>
<Switch>
    <div className="landing-root">
      <div className="landing-main">
        <div className="landing-main-img-wrap">
          <img src = {cat} alt="catbanner" />
        </div>


        <Route exact path="/home" component={home} />
        <div className="landing-main-btns-wrap">
          <a className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
             target="_blank" rel="noreferrer" onClick={() => {window.location.href = '/home';}}>
            <div className="landing-main-btn">
              <p>ENTER APP</p>
            </div>
          </a>

          <a className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
            href="https://wonderland.gitbook.io/wonderland/" target="_blank" rel="noreferrer">
            <div className="landing-main-btn">
              <p>OUR ROADMAP</p>
            </div>
          </a></div>
      </div>
      <div className="landing-background">
        <div className="landing-background-blobs-top"><img alt=""
            src={blob} /></div>
      </div>
    </div>
    <Redirect to="/" />
  </Switch>
</Router>
)
}

export const Logo = () => (
<svg width="80" height="50" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M0 10C0 4.47715 4.47715 0 10 0H20C25.5228 0 30 4.47715 30 10V20C30 25.5228 25.5228 30 20 30H10C4.47715 30 0 25.5228 0 20V10Z"
    fill="#E84142" />
  <path
    d="M20.2914 15.3898C20.8111 14.4921 21.6497 14.4921 22.1693 15.3898L25.4056 21.0709C25.9252 21.9685 25.5 22.7008 24.4607 22.7008H17.941C16.9134 22.7008 16.4882 21.9685 16.9961 21.0709L20.2914 15.3898ZM14.0315 4.45277C14.5512 3.55513 15.378 3.55513 15.8977 4.45277L16.6182 5.75198L18.3189 8.74017C18.7323 9.59056 18.7323 10.5945 18.3189 11.4449L12.6142 21.3307C12.0945 22.1339 11.2323 22.6417 10.2756 22.7008H5.53942C4.50005 22.7008 4.07485 21.9803 4.59454 21.0709L14.0315 4.45277Z"
    fill="white" />
</svg>
)

export default App