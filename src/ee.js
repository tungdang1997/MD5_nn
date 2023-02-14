import {useState} from "react";

export default function S(prop) {
    // let [list, setList] = useState([])
    console.log(prop)
    let [id, setId] = useState('');
    let [name, setName] = useState('');
    let [age, setAge] = useState('');
    let [address, setAddress] = useState('');
    // let [isShow, setIsShow] = useState(false)
    return (
        <>
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
                let listNew = [...prop.list];
                listNew.map((item, index) => {
                    if (prop.idX == index) {
                        listNew[index] = {
                            id: id,
                            name: name,
                            age: age,
                            address: address
                        }
                    }
                })
                prop.setList(listNew)
                setId('');
                setName('');
                setAge('');
                setAddress('');
                // setIsShow(isShow = false)
            }}>Save
            </button>
        </>
    )
}