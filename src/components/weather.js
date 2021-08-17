import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



class Weather extends React.Component {
 

  render() {
    return (
        
             
             <Table striped bordered hover>
              
                <tbody > 
                  <tr key={this.props.key}>
                    <th>Date: {this.props.date}</th>
                    <th>description: {this.props.description}</th>
        
                  </tr>
                 </tbody>
              </Table> 
              
            );
          }
    
  }


export default Weather;