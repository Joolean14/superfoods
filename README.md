# Prueba Back

**Por favor ingresar las credenciales que me proporcionaron en database.js para correr el programa.**

## To-Dos

- Crear el repo en git.

- Representar el schema en MySQL

  - Checkar como funciona object data type.
  - Checkar relaciones.

    CREATE TABLE warehouse (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    headquarters_number int,
    created_at VARCHAR(255),
    updated_at DATETIME,
    PRIMARY KEY(id)  
     );

    CREATE TABLE warehouse_description (
    id INT AUTO_INCREMENT NOT NULL,
    phone INT,
    city VARCHAR,
    address VARCHAR,
    created_at,
    updated_at,
    warehouse_id,
    PRIMARY KEY (id),
    FOREIGN KEY (warehouse_id) REFERENCES warehouse(id)  
     );

- Crear los query MySQL

  - SELECT \* FROM warehouse;

  - INSERT INTO warehouse (column1, column2, column3, ...) VALUES (value1, value2, value3, ...;
  - UPDATE warehouse SET column1 = value1, column2 = value2, ... WHERE condition;
  - DELETE FROM warehouse WHERE condition;

  _probando unos query_

  - INSERT INTO warehouse (name, headquarters_number, created_at, updated_at) VALUES ('warehouse', 13000000, 'Bogota', '2019-03-10 02:55:05');

  - SELECT \* FROM warehouse;

  - DELETE FROM warehouse WHERE warehouse_id = 1;

  - UPDATE warehouse SET name = "bodega", headquarters_number = 14000000, created_at = 'Medellin', updated_at = '2029-04-11 03:56:06' WHERE warehouse_id = 1;

- Crear las rutas en Express

  - GET
    app.get('/', function (req, res) {
    res.send('GET request to homepage')
    })

  - POST
    app.post('/', function (req, res) {
    res.send('POST request to homepage')
    })

  - PATCH
    app.put('/', function (req, res) {
    res.send('PUT request to homepage')
    })
  - DELETE
    app.delete('/', function (req, res) {
    res.send('DELETE request to homepage')
    })

- Conectar la Express con MYSQL

  - Checkar conexiones anteriores
  - instalar mysql y express-mysql-session npm

- Conectar a aws

- Integrar las rutas con los query para el CRUD
