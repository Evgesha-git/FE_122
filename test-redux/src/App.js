import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './store/asyncActions/customers';
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";
import { useAction } from "./hooks/useAction";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const { customers, loading } = useSelector(state => state.customer);
  const { addCustomerAction, removeCustomerAction, addManyCustomersAction } = useAction()

  console.log(cash);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  }

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  }

  const addCustomer = (user) => {
    const customer = {
      id: Date.now(),
      name: user
    }
    addCustomerAction(customer);
  }

  const removeUser = (id) => {
    removeCustomerAction(id);
  }

  return (
    <div className="App">
      <div style={{ fontSize: '26px' }}>{cash}</div>
      <div>
        <button onClick={() => addCash(+prompt())}>Полложить в банк</button>
        <button onClick={() => getCash(+prompt())}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt())}>Добавить пользователя</button>
        <button onClick={() => addManyCustomersAction()}>Добавить пользователей</button>

      </div>
      {customers.length > 0 ?
        <div style={{ width: '600px', margin: '0 auto' }}>
          {loading ?
            <div>Loading...</div> :
            customers.map((customer, i) =>
                <div
                  key={i.toString()}
                  onClick={() => removeUser(customer.id)}
                  style={{ padding: 10, border: '1px solid black' }}
                >{customer.name}</div>
              )
          }

        </div> :
        <div>Список пользователей пуст</div>
      }
    </div>
  );
}

export default App;
