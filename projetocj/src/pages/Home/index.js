import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";

export const Home = () => {
    return (
        <div className="main">
            <Header />
            <div className="content">
                <h1>Home</h1>
            </div>
        </div>
    );
}