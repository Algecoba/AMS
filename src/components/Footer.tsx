import React from "react";

const Footer: React.FC = () => (
    <footer style={{ padding: "1rem", background: "#f5f5f5", color: "#333", textAlign: "center" }}>
        <small>© {new Date().getFullYear()} AMS </small>
    </footer>
);

export default Footer;