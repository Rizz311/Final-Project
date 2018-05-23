drop table events;
create table events (
 event_id integer,
 event_name varchar(50),
 location_id integer references locations(location_id),
 event_start timestamp,
 event_end timestamp,
 attendance integer,
 description varchar(1000)
);
