import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Props = {
    children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => (
    <>
        <Navbar />
        <main style={{ minHeight: "80vh", padding: "2rem" }}>{children}</main>
        <Footer />
    </>
);

export default MainLayout;