--LOCATION-----------------*************************************
drop table locations;
create table locations (
   location_id serial primary key,
   name varchar(50),
   image_file varchar(500),
   latitude numeric(10,6),
   longitude numeric(10,6),
   in_out char(1),
   description varchar(500)
 );
-- Lee School---------****************************************
insert into locations (
   name,
   latitude,
   longitude,
   in_out,
   description)
  values(

   'Lee School',
   42.292501,
   -71.080053,
   'I',
   'There is a membership required it is $10, and lasts the full calendar year. You can get in the gym for $2 a visit. The gym normally runs 2 full half court games. But if enough players want to they can play a full court game.'
);
--Tobin Community Center-------*********************************
insert into locations (
   name,
   latitude,
   longitude,
   in_out,
   description)
  values(

   'Tobin Community Center',
   42.332047,
   -71.098164,
   'I',
   'If you have a membership at the Lee School the membership is also good at the Tobin CC. Memberships are $10 dollars for the year. The gym has "The Gun" it is a machine that helps to improve the jump shot. Ask a staff or the gym manager for more details on how to use it\;s services.'
);
--Mildred------------******************************************
insert into locations (
    name,
    latitude,
    longitude,
    in_out,
    description)
  values(

    'Mildred Community Center',
    42.277112,
    -71.090677,
    'I',
    'The Mildred is also apart of the community center membership if you have one your all set. Cannot enter by any other way.'
);
--Mattahunt-------------****************************************
insert into locations (
    name,
    latitude,
    longitude,
    in_out,
    description)
  values(

    'Mattahunt',
    42.276271,
    -71.103760,
    'I',
    'Free run no membership required at the moment.'
);
--Holland------------******************************************
insert into locations (
    name,
    latitude,
    longitude,
    in_out,
    description)
  values(

    'Holland',
    42.305913,
    -71.074164
    'I',
    'This gym will accept the community center member ship. The hardwood flooring is not waxed or maintained often so the grip '
);
--Burke HS------***************************************************
insert into locations (
    name,
    latitude,
    longitude,
    in_out,
    description)
  values(

    'Burke HS',
    42.307794,
    -71.080700,
    'I',
    'Membership required. The gym accepts the community center membership.'
);
