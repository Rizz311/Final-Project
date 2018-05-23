create table location_open(
      location_id integer references location(location_id),
      day_open char(3),
      time_open time,
      time_close time
      );
      
