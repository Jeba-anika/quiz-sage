import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Stastics = () => {
    const allTopicsDetails = useLoaderData();
    const data = allTopicsDetails.data;

    return (
        <div className='container mt-5'>
            <ResponsiveContainer width="100%" height={500}>
                <BarChart
                    width={400}
                    height={200}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#FFEB99" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Stastics;