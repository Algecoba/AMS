import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { email, password, firstName, lastName, roleName } = req.body;

        // Validación mínima
        if (!email || !password || !firstName || !lastName || !roleName) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'El usuario ya existe' });
        }

        const role = await prisma.role.findUnique({ where: { name: roleName } });
        if (!role) {
            return res.status(400).json({ error: 'Rol no válido' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                firstName,
                lastName,
                roleId: role.id,
            },
        });

        res.status(201).json({
            message: 'Usuario registrado con éxito',
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: role.name,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error del servidor' });
    }
};