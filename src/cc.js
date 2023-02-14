import {Component} from "react";


class C extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    name: 'A',
                    age: 25
                },
                {
                    name: 'B',
                    age: 26
                },
                {
                    name: 'C',
                    age: 27
                }
            ],
            inName: '',
            inAge: '',
            idx: '',
            name1: '',
            isShow: false
        }


    }

    add = () => {
        this.setState((state) => {
            return {
                list: [...state.list, {name: state.inName, age: state.inAge}],
                inName: '',
                inAge: ''
            }

        })
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showEdit = (e)=>{
        let a = e.target.value
        this.state.list.map((item, idx)=>{
            if (idx == a){
                this.setState({inName: item.name});
                this.setState({inAge: item.age})
                this.setState({name1: item.name});
                this.setState({idx: a});
            }
        })
        this.setState(state=>{
            return{
                isShow: !state.isShow
            }
        })
    }

    edit = ()=>{
        this.setState(state =>{
            state.list.map((item, idx)=>{
                if (idx == state.idx){
                    item.name = state.inName
                    item.age = state.inAge
                }
            })
            return {
                state,
                inName: '',
                inAge: '',
                isShow: !state.isShow
            }
            })

    }

    render() {
        return (<>
            {this.state.list.map((item, v) =>
                <>
                    <h2 key={v}>Name: {item.name},<br/> Age: {item.age}</h2>
                    <button key={v} value={v} onClick={()=>{
                        this.setState((state) => {
                            let dList = [...state.list];
                            dList.splice(v, 1)
                            return {
                                list: dList
                            }
                        })
                    }

                    }>Delete</button>
                    <button value={v} key={v} onClick={(e)=>{this.showEdit(e)}} >Edit</button>

                </>
            )
            }
            <br/>
            <input type="text" name={'inName'} value={this.state.inName} onChange={this.change}/>

            <input type="text" name={'inAge'} value={this.state.inAge} onChange={this.change}/>
            {!this.state.isShow && <button onClick={this.add}>Add</button>}
            {this.state.isShow && <button onClick={this.edit}>Edit</button>}

        </>)


    }
}

export default C;