import {useState} from "react";
import S from "./ee";


// export default function D() {
//     let [total, setTotal] = useState('')
//     let [st1, setSt1] = useState('')
//     let [st2, setSt2] = useState('')
//     return (
//         <table border={1}>
//             <div>
//                 <p>Kq: {total}</p>
//                 <input type="number" value={st1} onChange={(e) => {
//                     setSt1(e.target.value)
//                 }}/>
//                 <br/>
//                 <input type="number" value={st2} onChange={(e) => {
//                     setSt2(e.target.value)
//                 }}/>
//                 <br/>
//                 <button onClick={() => {
//                     setTotal(st1 * 1 + st2 * 1)
//                 }}>+
//                 </button>
//                 <button onClick={() => {
//                     setTotal(st1 * 1 - st2 * 1)
//                 }}>-
//                 </button>
//                 <button onClick={() => {
//                     setTotal((st1 * 1) * (st2 * 1))
//                 }}>x
//                 </button>
//                 <button onClick={() => {
//                     setTotal((st1 * 1) / (st2 * 1))
//                 }}>/
//                 </button>
//             </div>
//         </table>
//     )
// }


export default function E() {
    let [list, setList] = useState([])
    let [id, setId] = useState('');
    let [name, setName] = useState('');
    let [age, setAge] = useState('');
    let [address, setAddress] = useState('');
    let [isShow, setIsShow] = useState(false)

    return (

        <div>
            {list.map((item, idx) => (
                    <table key={idx} border="2px">
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.address}</td>
                            <td>
                                <button key={idx} value={idx} onClick={() => {
                                    let dList = [...list];
                                    dList.splice(idx, 1)
                                    setList(dList)

                                }}>Delete
                                </button>
                            </td>
                            <td>
                                <button key={idx} value={idx} onClick={() => {
                                    setIsShow(!isShow)
                                }}>Edit
                                </button>
                                <br/>
                                {isShow && <S list={list} setList={setList} idX = {idx}></S>}

                            </td>

                        </tr>

                    </table>
                )
            )}
            <input type="number" value={id} onChange={(e) => {
                setId(e.target.value)
            }}/>
            <input type="text" value={name} onChange={(e) => {
                setName(e.target.value)
            }}/>
            <input type="number" value={age} onChange={(e) => {
                setAge(e.target.value)
            }}/>
            <input type="text" value={address} onChange={(e) => {
                setAddress(e.target.value)
            }}/>
            <button onClick={() => {
                setList([...list, {
                    id: id,
                    name: name,
                    age: age,
                    address: address
                }])
                setId('');
                setName('');
                setAge('');
                setAddress('')
            }}>Add
            </button>
        </div>


    )


}