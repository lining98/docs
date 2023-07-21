# MySQL 数据库的常用命令

MySQL 数据库的常用命令包括管理数据库和表的命令、数据操作命令以及授权和权限管理命令。下面列出了一些常用的 MySQL 命令：

## 管理数据库和表的命令

- `CREATE DATABASE database_name;`：创建一个新的数据库。
- `DROP DATABASE database_name;`：删除一个数据库。
- `USE database_name;`：选择要使用的数据库。
- `SHOW DATABASES;`：列出所有数据库。
- `CREATE TABLE table_name (column1 datatype, column2 datatype, ...);`：创建一个新的表。
- `ALTER TABLE table_name ADD column_name datatype;`：向表中添加一个新的列。
- `ALTER TABLE table_name DROP COLUMN column_name;`：从表中删除一个列。
- `DROP TABLE table_name;`：删除一个表。
- `SHOW TABLES;`：列出数据库中的所有表。
- `DESCRIBE table_name;`或`DESC table_name;`：显示表的结构。

## 数据操作命令

- `INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);`：向表中插入数据。
- `SELECT column1, column2, ... FROM table_name WHERE condition;`：从表中检索数据。
- `UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;`：更新表中的数据。
- `DELETE FROM table_name WHERE condition;`：从表中删除数据。

## 授权和权限管理命令

- `GRANT privileges ON database_name.table_name TO 'username'@'hostname';`：授予用户特定数据库或表的权限。
- `REVOKE privileges ON database_name.table_name FROM 'username'@'hostname';`：从用户撤销特定数据库或表的权限。
- `CREATE USER 'username'@'hostname' IDENTIFIED BY 'password';`：创建一个新用户。
- `ALTER USER 'username'@'hostname' IDENTIFIED BY 'new_password';`：更改用户的密码。
- `DROP USER 'username'@'hostname';`：删除一个用户。
- `SHOW GRANTS FOR 'username'@'hostname';`：显示用户的权限。
