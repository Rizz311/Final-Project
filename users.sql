drop table users;
create table users (
username varchar(50),
password varchar(50),
email    varchar(50),
age      integer,
show_age  boolean,
status    varchar(1)
);

insert into users (
    username,
    password,
    email,
    age,
    show_age,
    status)
  values(

    'User1',
    'pass1',
    'User1.com',
    21,
    'Y',
    'A'
);
insert into users (
    username,
    password,
    email,
    age,
    show_age,
    status)
  values(

    'User2',
    'pass2',
    'User2.com',
    18,
    'Y',
    'A'
);
insert into users (
    username,
    password,
    email,
    age,
    show_age,
    status)
  values(

    'User3',
    'pass3',
    'User3.com',
    33,
    'N',
    'A'
);
insert into users (
    username,
    password,
    email,
    age,
    show_age,
    status)
  values(

    'User4',
    'pass4',
    'User4.com',
    40,
    'Y',
    'S'
);
insert into users (
    username,
    password,
    email,
    age,
    show_age,
    status)
  values(

    'User5',
    'pass5',
    'User5.com',
    27,
    'N',
    'D'
);
