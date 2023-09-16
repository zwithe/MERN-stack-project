/* Schema structure
-----Hotels
name:{
    string
    required
}
duration of stay{
    start date
    end date
}
location{
    number
    lat
    lon
}
Price{
    number
}

-----Day
date{
    date
}
activties{
   not required
   Activities
   type object
}

-----Activities
name{
    string
}
location{
    number
    lat
    lon
}
type{
    string
    enum [park, museum, resturant]
}
price{
    number
    not required
}
activity duration{
    time
}






*/