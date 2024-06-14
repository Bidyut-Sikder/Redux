import { useDispatch } from "react-redux";
import deleteImage from "../../assets/images/delete.svg";
import editImage from "../../assets/images/edit.svg";
import { deleteAsyncData, editActive } from "../../feature/transaction/transactionSlice";
import { useEffect } from "react";

export default function Transaction({ transaction }) {
    const dispatch = useDispatch()


    const handleEdit = () => {
        dispatch(editActive(transaction))
    }

    const { id, name, type, amount } = transaction

    const handleDelete = () => {
        dispatch(deleteAsyncData(id))

    }
    return (
        <li className={`transaction ${type}`} >
            <p className="pr-5">{name}  </p> <br />
            <div className="right">
                <p> ৳ {amount}</p>
                <button className="link">
                    <img alt="Edit" onClick={handleEdit} className="icon" src={editImage} />
                </button>
                <button onClick={handleDelete} className="link">
                    <img alt="Delete" className="icon" src={deleteImage} />
                </button>
            </div>
        </li>
    );
}
