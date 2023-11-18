import React from 'react';
import styled from "styled-components";

const Dashboard = () => {
    return (
        <DashboardDiv>
            <div>Logo</div>
            <div>Search</div>
            <div>Profile</div>
        </DashboardDiv>
    );
};

const DashboardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20vw
`

export default Dashboard;