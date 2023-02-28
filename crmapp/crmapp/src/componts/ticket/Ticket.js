import React, { useEffect, useState } from 'react'

import { Navbar } from '../Navbar/Navbar';
import { useNavigate } from 'react-router';

const Ticket = () => {
    const [tickets, setTickets] = useState([]);
    const naviagte = useNavigate();

    useEffect(() => {
        fetch("http://localhost:4000/api/ticket")
            .then((res) => res.json())
            .then((parsedRes) => {
                setTickets(parsedRes);
            });
    }, []);

    function handleEditClick(desc) {
        naviagte("/ticketform/" + desc);
    }


    return (
        <div>
           <Navbar/>
           <div>
                <a
                    href="/ticketform"
                    className="btn btn-success mb-3">
                    New Ticket
                </a>
           </div>
            <div className="container">

               
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Customer</th>
                            <th scope="col">Description</th>
                            <th scope="col">Assigned To</th>
                            <th scope="col">Status</th>
                            <th scope="col">Raised On</th>
                            <th> Update </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tickets.map(t =>
                                <tr>
                                    <td>{t.customer}</td>
                                    <td>{t.desc}</td>
                                    <td>{t.assignedTo}</td>
                                    <td>{t.status}</td>
                                    <td>{t.raisedOn}</td>
                                    <td>
                                        <button
                                            onClick={() => { handleEditClick(t.desc) }}
                                            className="btn btn-warning">Edit</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Ticket