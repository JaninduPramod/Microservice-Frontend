import React, { useEffect, useState } from "react";
import axios from "axios";
import "./notify.css"; // Import unique styles

const Invoices = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        fetchInvoices();
    }, []);

    const fetchInvoices = async () => {
        try {
            const response = await axios.get("http://localhost:8083/api/v5/invoices");
            const data = response.data;
            console.log("Fetched Invoices:", data);
            setInvoices(data);
        } catch (error) {
            console.error("Error fetching invoices", error);
        }
    };

    const deleteInvoice = async (id) => {
        if (window.confirm("Are you sure you want to delete this invoice?")) {
            try {
                await axios.delete(`http://localhost:8083/api/v5/invoice/${id}`);
                setInvoices(invoices.filter(invoice => invoice.notify_id !== id));
            } catch (error) {
                console.error("Error deleting invoice", error);
            }
        }
    };

    return (
        <div className="notify-container">
            <h2 className="notify-heading">Invoices</h2>
            <table className="notify-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Email</th>
                        <th>Total Bill</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice) => (
                        <tr key={invoice.notify_id}>
                            <td>{invoice.notify_id}</td>
                            <td>{invoice.user_email}</td>
                            <td>{invoice.total_bill}</td>
                            <td>
                                <button 
                                    onClick={() => deleteInvoice(invoice.notify_id)} 
                                    className="notify-btn"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Invoices;
