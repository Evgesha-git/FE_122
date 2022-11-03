import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { TContext } from "../../App";

const Transaction = () => {
    const [data, setData] = useState({});
    const {tstate} = useContext(TContext);

    const {
        time,
        category,
        title,
        description,
        type,
        price
    } = data;

    let {id} = useParams();

    useEffect(() => {
        console.log(tstate);
        setData(tstate.find(item => item.id === +id));
    });

    return (
        <div className="transaction">
            <div className="title">
                <Link to={'/transactions'}>{'<'}</Link>
                <div className="time">{time}</div>
            </div>
            <div className="main">
                <div className="cat">
                    {category.map(cat => <span key={cat}>{cat}</span>)}
                </div>
                <h2 className="title">{title}</h2>
                <p className="desc">{description}</p>
                <p className="price">
                    {type ? '+' : '-'} $ {price}
                </p>
                <div className="buttons">
                    <button className="edit">Edit</button>
                    <button className="remove">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Transaction;