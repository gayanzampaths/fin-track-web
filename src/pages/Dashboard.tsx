import React from "react";
import Navbar from "../components/Navbar";
import { Box, Grid, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";

interface IncomeData {
    source: string;
    percentage: number;
}

interface ExpenseData {
    category: string;
    percentage: number;
}

interface incomeDataProp {
    incomeData: IncomeData[];
}

interface ExpenseDataProp {
    expenseData: ExpenseData[];
}

const DashboardPage = () => {

    const incomeData: IncomeData[] = [
        { source: 'Salary', percentage: 60 },
        { source: 'Investments', percentage: 30 },
        { source: 'Other', percentage: 10 },
    ];

    const expenseData: ExpenseData[] = [
        { category: 'Rent', percentage: 35 },
        { category: 'Food', percentage: 25 },
        { category: 'Entertainment', percentage: 15 },
        { category: 'Utilities', percentage: 10 },
        { category: 'Other', percentage: 15 },
    ];


    return (
        <React.Fragment>

            < Navbar />

            <Box sx={{ border: '1px solid lightgrey', padding: 2, borderRadius: 2, margin: 5 }}>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box sx={{ border: '1px solid lightgrey', padding: 2, borderRadius: 2, margin: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="h4"> Summary of Income </Typography>
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 60, label: 'Salary' },
                                            { id: 1, value: 30, label: 'Investments' },
                                            { id: 2, value: 10, label: 'Other' },
                                        ],
                                        innerRadius: 30,
                                        outerRadius: 100,
                                        paddingAngle: 5,
                                        cornerRadius: 5,
                                        startAngle: -90,
                                        endAngle: 180,
                                        cx: 150,
                                        cy: 150,
                                    }
                                ]}
                                height={300}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                    <Box sx={{ border: '1px solid lightgrey', padding: 2, borderRadius: 2, margin: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="h4"> Summary of Expenses </Typography>
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 35, label: 'Rent' },
                                            { id: 1, value: 25, label: 'Food' },
                                            { id: 2, value: 15, label: 'Entertainment' },
                                            { id: 2, value: 10, label: 'Utilities' },
                                            { id: 2, value: 15, label: 'Other' },
                                        ],
                                        innerRadius: 30,
                                        outerRadius: 100,
                                        paddingAngle: 5,
                                        cornerRadius: 5,
                                        startAngle: -90,
                                        endAngle: 180,
                                        cx: 150,
                                        cy: 150,
                                    }
                                ]}
                                height={300}
                            />
                        </Box>
                    </Grid>
                </Grid>

            </Box>
        </React.Fragment>
    )
}

export default DashboardPage;