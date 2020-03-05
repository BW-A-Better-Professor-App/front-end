import React, { useEffect, useState } from 'react';
import axios from 'axios'

import StudentCard from './StudentCard'
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
// import data from './data.js'

const data = [
  { name: 'John Smith', task: 'Review Term Paper', Date: 'March 10th'},
  { name: 'John burger', task: 'Review Term Paper', Date: 'March 11th'},
  { name: 'John stonper', task: 'Review Term Paper', Date: 'March 13th'},
  { name: 'John lamoni', task: 'Review Term Paper', Date: 'March 16th'},
]
export default function StudentList() {
    const [students, setStudents] =  useState([])

    useEffect(() => {
      // setStudents(data);
      // console.log("dummy students: ", students)
        axiosWithAuth()
        .get(`/users`)
        .then(response => {
            console.log('response of tasks', response);
              setStudents(response.data);
        })
        .catch(err => {
            console.log('error, go fix!', err);
        })
    }, []);

    return (
      <TableContainer className="table_container" component={Paper}>
        <Table  size="small" aria-label="a dense table">
          <TableHead className="table_head">
            <TableRow>
              <TableCell align="center">My Students</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(student => (
              <TableRow key={student.id}>
                {/* <TableCell component="th" scope="row">
                  {row.name}
                </TableCell> */}
                <TableCell align="center">{student.name}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );

    // return (
    //     <section className="student-list">
    //         {/* <SearchFrom /> */}
    //         <div>
    //          {data.map(student => (
    //           <div key={data.id}>
              
    //             <h1>{student.name}</h1> 
                
                
    //             {/* // assignments={student.assignments}
    //             // dueDate={student.assignments.dueDates}
    //             // notes={student.notes} */}
              
    //           </div>
    //         ))}
    //         </div>
    //     </section>
    // );
}

//needs to display a list of students.
//need to be able to click on each student's name and have their details display
