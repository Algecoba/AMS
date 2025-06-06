import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    Alert,
    CircularProgress,
} from "@mui/material";

export default function LoginForm() {
    const [form, setForm] = useState({ email: "", password: "" });
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
            const res = await fetch("http://localhost:4000/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (res.ok) {
                setAlert({ type: "success", message: "Login exitoso" });
                // Aquí podrías guardar el token o redireccionar
            } else {
                setAlert({ type: "error", message: data.error || "Credenciales incorrectas" });
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
                Iniciar sesión
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
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
                disabled={loading}
                startIcon={loading ? <CircularProgress size={20} /> : null}
            >
                Iniciar sesión
            </Button>
        </Box>
    );
}