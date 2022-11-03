import { useContext, useRef } from "react";
import { TContext } from "../../App";
import { MONTH } from "../../utils/constants";

const AddTransaction = () => {
    const {
        tstate,
        setTstate,
        count,
        setCount
    } = useContext(TContext);
    const form = useRef(null);

    const formHandler = (e) => {
        e.preventDefault();
        let inputs = form.current.children;
        console.log(inputs);
        let date = new Date();
        let data = [...inputs].reduce((d, item) => {
            if (item.tagName !== "BUTTON"){
                if (item.name === 'category'){
                    return {
                        ...d,
                        [item.name]: item.value.split(' '),
                    }
                }
                return {
                    ...d,
                    [item.name]: item.value,
                }
            }
            return d;
        }, {});
        data = {
            ...data,
            id: count,
            time: `${date.getDate()} ${MONTH[date.getMonth()]}, ${date.getHours()}:${date.getMinutes()}`,
        };
        setCount(count + 1);
        setTstate([...tstate, data]);
        console.log(tstate);
    }

    return (
        <div className="form">
            <form ref={form} action="" onSubmit={formHandler}>
                <input type="text" name="title" id="" className="title" />
                <input type="text" name="category" id="" className="cat" />
                <select name="type" id="">
                    <option value={true}>Доход</option>
                    <option value={false}>Расход</option>
                </select>
                <textarea name="description" id="" cols="30" rows="10"></textarea>
                <input type="number" name="price" id="" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddTransaction;