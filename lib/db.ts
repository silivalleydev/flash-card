// lib/db.ts
import mysql from 'mysql2/promise';

export const db = mysql.createPool({
    host: 'ec2-44-203-206-13.compute-1.amazonaws.com',  // ← EC2 퍼블릭 IP
    user: 'admin',
    password: '1234',
    database: 'testdb',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
