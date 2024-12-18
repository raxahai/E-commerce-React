import bcrypt from "bcryptjs";

const users = [
  // Admin user
  {
    name: "Syeda Sabeen Fatima",
    email: "sabeen@kiet.com",
    password: bcrypt.hashSync("12345", 10), //  10 = num rounds
    isAdmin: true,
  },
  // Standard users
  {
    name: "Syed Raza Haider",
    email: "raza@dummy.com",
    password: bcrypt.hashSync("12345", 10), //  10 = num rounds
  },
];

export default users;
