import { useState } from "react";
import { Link } from "react-router-dom";
import AddTransaction from "../AddTransaction";

const Transactions = () => {
    const [form, setForm] = useState(false);

    return (
        <div className="transactions">
            <div className="header">
                <Link to={'/'}>{'<'}</Link>
                <h2>Transactions</h2>
            </div>
            <div className="t_container">
                {/* Вывод краткой информации по транзакциям */}
            </div>
            <button onClick={() => setForm(!form)} className="add">+</button>
            {form ? <AddTransaction/> : null}
        </div>
    )
}

export default Transactions;