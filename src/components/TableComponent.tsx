import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

type Props = {
    title: string;
    header: string[];
    rows: Object[];
}

export const TableComponent = ({ title, header, rows }: Props) => {
    if (rows.length === 0) {
        return (
            <Typography component="p">
                No hay elementos para mostrar.
            </Typography>
        )
    }

    return (
        <Box className="list">
            <Typography component="h1" className="list__title">
                {title}
            </Typography>
            <TableContainer component="div">
                <Table className="list__table">
                    <TableHead>
                        <TableRow>
                            {
                                header.map((head, index) => (
                                    <TableCell key={index} align="left" className="table__cell-head">
                                        {head}
                                    </TableCell>
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
        </Box>
    )
}
