# mysql-create-db-and-user


```js
import mysql from 'mysql/promise';
import createDbAndUser from 'mysql-create-db-and-user';

const pool = mysql.createPool({...}) // or mysql.connection
createDbAndUser(pool, {
  host: '%',
  dbName: 'localhost',
  user: '...',
  password: '...'
});
```