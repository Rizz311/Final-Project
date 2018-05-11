async function testdb() {
   const { Client } = require('pg')
   const client = new Client({
   user: 'resilient',
       host: 'localhost',
       password: 'resilient',
   });
   await client.connect()

   const res = await client.query('SELECT $1::text as message', ['Hello world!'])
   console.log(res.rows[0].message) // Hello world!
   await client.end()
}

testdb();
