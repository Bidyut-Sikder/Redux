import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAsyncData, deleteAsyncData, editActive, updateAsyncData } from "../feature/transaction/transactionSlice";

export default function Form() {
    const dispatch = useDispatch()
    const { isLoading, error, isError } = useSelector(state => state.transaction)
    const { editing } = useSelector(state => state.transaction)



    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [amount, setAmount] = useState('')
    const [editingMode, setEditingMode] = useState(false)

    const resetForm = () => {
        setName('')
        setAmount('')
        setType('')
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addAsyncData({ name, type, amount: Number(amount) }))
        resetForm();
    }
    const updateHandleSubmit = (e) => {
        e.preventDefault()
        // dispatch(editActive({
        //     id: editing.id,
        //     name, type, amount
        // }))
        dispatch(updateAsyncData({
            id: editing.id,
            data: {
                name, type, amount
            }
        }))



        setEditingMode(false)
        resetForm();
    }


    const cancelHandle = () => {
        setEditingMode(false)

    }




    useEffect(() => {

        if (editing.id) {
            setName(editing.name)
            setAmount(editing.amount)
            setType(editing.type)
            setEditingMode(true)
        } else {
            setEditingMode(false)
            resetForm()
        }



    }, [editing])

    // dispatch(updateAsyncData({
    //     id: editing.id,
    //     data: {
    //         name, type, amount
    //     }
    // }))

    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <form onSubmit={editingMode ? updateHandleSubmit : handleSubmit}>

                <div className="form-group">
                    <label htmlFor="transaction_name">Name</label>
                    <input
                        type="text"
                        name="transaction_name"
                        placeholder="Transaction_name"
                        value={name}
                        required={true}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group radio">
                    <label htmlFor="transaction_type">Type</label>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="income"
                            name="transaction_type"
                            checked={type === 'income'}
                            onChange={() => setType('income')}
                        />
                        <label htmlFor="transaction_type">Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="transaction_type"
                            placeholder="Expense"
                            checked={type === 'expense'}
                            onChange={() => setType('expense')}
                        />
                        <label htmlFor="transaction_type">Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="transaction_amount">Amount</label>
                    <input
                        type="number"
                        placeholder="0.00"
                        name="transaction_amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn">{editingMode ? "Update Transaction" : "Add Transaction"}</button>

                <div>{isError && !isLoading && <p className="error" >{error}</p>}</div>

                <button onClick={cancelHandle} className={`btn   ${!editingMode && "cancel_edit"}`}>
                    {editingMode && "Cancel Edit"}
                </button>
            </form>
        </div>
    );
}
