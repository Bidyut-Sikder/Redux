import { useSelector } from "react-redux";
import { numberWithCommas } from "../utils/numberWithCommas";

export default function Balance() {

    const { transactions } = useSelector(state => state.transaction)

  
    let totalCount=0;
    transactions.forEach(element => {
       // console.log(element)
        if (element.type === 'income') {

            totalCount += element.amount
        }else{
            
            totalCount -= element.amount
        }
    });

   // console.log(totalCount)

    return (
        <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
                <span>৳</span>
                <span> {numberWithCommas(totalCount)}</span>
            </h3>
        </div>
    );
}
