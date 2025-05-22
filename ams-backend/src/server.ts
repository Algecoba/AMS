import app from "./app";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor AMS backend escuchando en puerto ${PORT}`);
});