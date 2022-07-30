import React, { useEffect, useState } from 'react'
import { getAllTheatres } from '../../api/theatres';
import MaterialTable from "@material-table/core";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { Modal } from "react-bootstrap";

function Theatres() {
    const [theatresList, setTheatresList] = useState([]);

    useEffect(() => {
      getAllTheatres().then((response)=>{
        const {data, status, message} = response;
        if(status === 200){
            console.log(data);
            setTheatresList(data);
        }
      }).catch(error => {
        console.log(error);
      })
        //api call tofetch theatre list
        // on success of data, set it to state --> setTheatresList

    }, [])
    
    //return the material table withh all data in the list
  return (
    <div>
      
    </div>
  )
}

export default Theatres