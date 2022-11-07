import './smalltable.css';
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: '20%' },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: true,
        width: '40%',
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'role', headerName: 'Role', width: '40%' },
];

const rows = [
    { id: '#121', lastName: 'Snow', firstName: 'Jon', role: 'Manager'},
    { id: '#321', lastName: 'Lannister', firstName: 'Cersei', role: 'Web Devloper'},
    { id: '#643', lastName: 'Lannister', firstName: 'Jaime', role: 'HR'},
    { id: '#1523', lastName: 'Stark', firstName: 'Arya', role: 'Tester'},
    { id: '#640', lastName: 'Targaryen', firstName: 'Daenerys', role: 'Web Devloper'},
    { id: '#867', lastName: 'Melisandre', firstName: null, role: 'Front-end Devloper'},
    { id: '#534', lastName: 'Clifford', firstName: 'Ferrara', role: 'Back-end Devloper'},
    { id: '#212', lastName: 'Frances', firstName: 'Rossini', role: 'Graphical Designer'},
    { id: '#64', lastName: 'Roxie', firstName: 'Harvey', role: 'Web Devloper'},
];

function SmallTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}

export default SmallTable;