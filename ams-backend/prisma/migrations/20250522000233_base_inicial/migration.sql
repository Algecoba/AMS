-- CreateTable
CREATE TABLE "Role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,
    "birthDate" DATETIME,
    "address" TEXT,
    "city" TEXT,
    "phone" TEXT,
    "gender" TEXT,
    "acudienteId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_acudienteId_fkey" FOREIGN KEY ("acudienteId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Matricula" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "fechaMatricula" DATETIME NOT NULL,
    "tipoMatricula" TEXT,
    "nivel" TEXT,
    "gradoNumero" INTEGER,
    "gradoLetra" TEXT,
    "tipoIdentificacion" TEXT,
    "numeroIdentidad" TEXT,
    "lugarExpedicion" TEXT,
    "fechaExpedicion" DATETIME,
    "lugarNacimiento" TEXT,
    "fechaNacimiento" DATETIME,
    "repitente" BOOLEAN,
    "colegioAnterior" TEXT,
    "religion" TEXT,
    "eps" TEXT,
    "seguroEstudiantil" BOOLEAN,
    "alergia" BOOLEAN,
    "alergias" TEXT,
    "enfermedad" BOOLEAN,
    "enfermedades" TEXT,
    "discapacidad" BOOLEAN,
    "discapacidades" TEXT,
    "condicionEspecial" BOOLEAN,
    "condiciones" TEXT,
    "poblacion" TEXT,
    "padreApellido" TEXT,
    "padreNombre" TEXT,
    "padreTipoId" TEXT,
    "padreNumeroId" TEXT,
    "padreOcupacion" TEXT,
    "padreDireccion" TEXT,
    "padreCiudad" TEXT,
    "padreTelefono" TEXT,
    "padreEstado" TEXT,
    "madreApellido" TEXT,
    "madreNombre" TEXT,
    "madreTipoId" TEXT,
    "madreNumeroId" TEXT,
    "madreOcupacion" TEXT,
    "madreDireccion" TEXT,
    "madreCiudad" TEXT,
    "madreTelefono" TEXT,
    "madreEstado" TEXT,
    CONSTRAINT "Matricula_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StaffProfile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "tipoPersonal" TEXT NOT NULL,
    "nivel" TEXT,
    "areas" TEXT,
    "direccionGrupo" TEXT,
    "escalafon" BOOLEAN,
    "nivelEscalafon" TEXT,
    CONSTRAINT "StaffProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Matricula_userId_key" ON "Matricula"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "StaffProfile_userId_key" ON "StaffProfile"("userId");
