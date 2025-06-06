import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    MenuItem,
    Alert,
    CircularProgress,
} from "@mui/material";

const ROLES = ["ADMIN", "USER", "TEACHER"];

export default function RegisterForm() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        roleName: "USER",
    });
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setAlert(null);

        try {
            const res = await fetch("http://localhost:4000/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (res.ok) {
                setAlert({ type: "success", message: data.message });
                setForm({
                    email: "",
                    password: "",
                    firstName: "",
                    lastName: "",
                    roleName: "USER",
                });
            } else {
                setAlert({ type: "error", message: data.error || "Error desconocido" });
            }
        } catch {
            setAlert({ type: "error", message: "No se pudo conectar al servidor" });
        }
        setLoading(false);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ maxWidth: 400, mx: "auto", mt: 6, p: 3, boxShadow: 3, borderRadius: 2 }}
        >
            <Typography variant="h5" mb={2}>
                Registro de Usuario
            </Typography>
            {alert && (
                <Alert severity={alert.type} sx={{ mb: 2 }}>
                    {alert.message}
                </Alert>
            )}
            <TextField
                label="Correo electrónico"
                name="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                type="email"
            />
            <TextField
                label="Contraseña"
                name="password"
                value={form.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                type="password"
            />
            <TextField
                label="Nombre"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Apellido"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                select
                label="Rol"
                name="roleName"
                value={form.roleName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            >
                {ROLES.map((role) => (
                    <MenuItem value={role} key={role}>
                        {role}
                    </MenuItem>
                ))}
            </TextField>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
                disabled={loading}
                startIcon={loading ? <CircularProgress size={20} /> : null}
            >
                Registrar
            </Button>
        </Box>
    );
}