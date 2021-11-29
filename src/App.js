import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Navbar from './components/navbar';
import MobileNo from './components/entermobile';
import CreateAccount from './components/createAccount';
import CusById from './components/customerById';
import UpdateAcc from './components/updateAccount';
import Deposite from './components/deposite';
import Withdraw from './components/withdraw';
import FundTransfer from './components/fundtransfer';
import Login from './components/Login';
import ViewCus from './components/viewcustomerRedux'
import PageNotFound from './components/pagenotfound';
import Home from './components/Home';
import TransactionForm from './components/transactionForm';
import TransactionType from './components/transactionType';
import TransactionDate from './components/transactionDate';
import Transaction from './components/transaction';
import BillPayments from "./components/billpayments";
import AddBillPayment from './components/addbillpayment';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      {/* <Link
          to="/getCustomerbyId/:cid"
          className="btn btn-secondary  mb-2 mt-2 "
        >
          Your Account
        </Link> */}
    </div>
    <Switch>
    
    <Route path="/login" component={Login}/>
    <Route path="/createAcc" component={CreateAccount}/>
    <Route path="/showBalance/:mobileNo" component={MobileNo}/>
    <Route path="/getCustomerbyId/:cid" component={CusById}/>
    <Route path="/updateAccount/:cid" component={UpdateAcc}/>
    <Route path="/makeDeposit/:mobileNo/:amount" component={Deposite}/>
    <Route path="/withdrawMoney/:mobileNo/:amount" component={Withdraw}/>
    <Route path="/transferMoney/:sourcemobileNo/:targetMobileNo/:amount" component={FundTransfer}/>
    <Route path="/viewAccount" component={ViewCus}/>


        <Route exact path="/transaction" component={Transaction}/>
        <Route exact path="/addTrans/add" component={TransactionForm}/>
        <Route exact path="/transaction/transactionType/:transactionType"component={TransactionType}/>
        <Route exact path="/transaction/transactionDate/:transactionDate"component={TransactionDate}/>

        <Route path="/ph/add" component={AddBillPayment} />
        <Route path="/ph" component={BillPayments} />

    <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
    </Switch>
    </Router>
  );
}

export default App;
