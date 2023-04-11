import './smalltable.css';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
import { DataGrid } from '@mui/x-data-grid';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import { createTheme } from "@mui/material/styles";

const columns = [
    { field: 'id', headerName: 'ID', width: '20%' },
    {
        field: 'fullName',
        headerName: 'Full name',
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
export default function renderProgress(params) {
    return <LinearProgress variant="determinate" value={10} />;
    // <LinearProgress variant="determinate" value={10} />
}
function SmallProgressTable() {
    // const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);
    const columns = [
        { field: 'ProductName', headerName: 'ProductName' },
        { field: 'Productivity', headerName: 'Percentage', renderCell: renderProgress,type: "number",},
    ];
    const rows = [
        { id: '#121', ProductName: 'Snow', Productivity: Math.random()},
        { id: '#321', ProductName: 'Lannister', Productivity: Math.random()},
        { id: '#643', ProductName: 'Lannister', Productivity: Math.random()},
        { id: '#1523', ProductName: 'Stark', Productivity: Math.random()},
        { id: '#640', ProductName: 'Targaryen', Productivity: Math.random()},
        { id: '#867', ProductName: 'Melisandre',Productivity: Math.random()},
        { id: '#534', ProductName: 'Clifford', Productivity: Math.random()},
        { id: '#212', ProductName: 'Frances', Productivity: Math.random()},
        { id: '#64', ProductName: 'Roxie', Productivity: Math.random()},
    ];
    
    return (
        <div style={{ height: 400, width: '100%' }}>
            <LinearProgress variant="determinate" value={10} />
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}

export {SmallTable, SmallProgressTable};