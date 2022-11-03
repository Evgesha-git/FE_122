import { useNavigate } from "react-router";

const Main = () => {
    const navigate = useNavigate();
    const balance = 2000;

    const toTransactions = () => {
        navigate('/transactions');
    }

    return (
        <div className="main">
            <div className="balance">
                <p>Your balance</p>
                <h2 className="balance">{balance}</h2>
            </div>
            <button onClick={toTransactions} className="get_transactions">All transactions</button>
        </div>
    )
}

export default Main;