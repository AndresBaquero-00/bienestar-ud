import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { EmployeeQuery } from "../../../interfaces";

type Props = {
    title: string;
    header: string[];
    rows: EmployeeQuery[];
}

export const ListComponent = ({ title, header, rows }: Props) => {
    return (
        <div className="list">
            <h1 className="list__title">{ title }</h1>
            <TableContainer component="div">
                <Table className="list__table">
                    <TableHead>
                        <TableRow>
                            {
                                header.map((head, index) => (
                                    <TableCell key={index} align="left" className="table__cell-head">{head}</TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map((row, index) => (
                                <TableRow key={index}>
                                    {
                                        Object.values(row).map((column, index) => (
                                            <TableCell key={index} align="left" className="table__cell-body">
                                                {column}
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
