import React, { Component } from 'react'

export default class ListItem extends Component {
  render() {
      let numbers = [1,4,6,8,2,8];
      let listElement = numbers.map((num)=>{
          return (
              <li>{num}</li>
          )
      })
      let students = [
          {studetnId:"100",name:"Chung",age:45},
          {studetnId:"200",name:"Tùng",age:15},
          {studetnId:"300",name:"Hùng",age:25},
      ];

      let listStudent = students.map((item,key)=>{
          return (
              <tr >
                  <td>{item.studetnId}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
              </tr>
          )
      })
    return (
      <div>
        <ul style={{width:"100px"}}>
            {listElement}
        </ul>
       <table border="1px">
           <tbody>
               {listStudent}
           </tbody>
       </table>
      </div>
    )
  }
}
