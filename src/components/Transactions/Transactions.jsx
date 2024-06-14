import { useDispatch, useSelector } from "react-redux";
import Transaction from "./Transaction";
import { useEffect } from "react";
import { getAsyncData } from "../../feature/transaction/transactionSlice";

export default function Transactions() {
    const dispatch = useDispatch()
    const { error, transactions, isLoading, isError } = useSelector(state => state.transaction)
    const { editing } = useSelector(state => state.transaction)

    useEffect(() => {
        dispatch(getAsyncData())
    }, [editing])

  












    let content = null

    if (isLoading) return <p>Loding..</p>

    if (!isLoading && isError) {
        return <p>{error}</p>
    }
    if (!isLoading && !isError && transactions.length == 0) {
        return <p>No Data Found.</p>
    }
    if (!isLoading && !isError && transactions.length > 0) {
        return transactions.map((transaction, i) => {
            return <Transaction transaction={transaction} key={i} />
        })
    }

    return (
        <>
            <p className="second_heading">Your Transactions:</p>

            <div className="conatiner_of_list_of_transactions">
                <ul>
                    {/* <Transaction /> */}
                    {content}
                </ul>
            </div>
        </>
    );
}
















