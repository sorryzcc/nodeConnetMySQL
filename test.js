const mysql = require('mysql2/promise');  

async function main() {  
    try {  
        const connection = await mysql.createConnection({  
            host: 'localhost',  
            user: 'root',  
            database: 'test',  
            password: '123456',  
            waitForConnections: true,  
            connectionLimit: 10,  
            queueLimit: 0  
        });  

        const [rows, fields] = await connection.execute('SELECT * FROM testtable');  
        console.log(rows);  

        await connection.end();  
    } catch (error) {  
        console.error(error);  
    }  
}  

main();