import React, {Component} from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"

class ReacTable1 extends Component{
    render(){
        const data = [{
            name: 'Ayan',
            age: 26

        },{
            name:'Ahana',
            age: 22
        },{
            name:'Peter',
            age: 40

        },{
            name:'virat',
            age: 32
        },{
            name:'Rohit',
            age: 32
        },{
            name:'Dhoni',
            age: 37
        }]
        const columns = [{
            Header:'Employee Name',
            accessor:'name'
        },{
            Header: 'Employee Age',
            accessor: 'age'
        }]
        return (
            <div>
                <ReactTable
                data={data}
                columns={columns}
                defaultPageSize = {2}
                pageSizeOptions ={[2,4,6]}
                />
            </div>
        )
    }
}
export default ReacTable1;