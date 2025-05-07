setwd("D:/datascience/divvy")
install.packages("tidyverse")
install.packages("lubridate")
install.packages("dplyr")
library(tidyverse)
library(lubridate)
library(dplyr)
install.packages("ggplot2")
library(ggplot2)

q2_2019 <- read.csv("Divvy_Trips_2019_Q2.csv")
q3_2019 <- read.csv("Divvy_Trips_2019_Q3.csv")
q4_2019 <- read.csv("Divvy_Trips_2019_Q4.csv")
q1_2020 <- read.csv("Divvy_Trips_2020_Q1.csv")

#Display columns names of each dataframe
colnames(q2_2019)
colnames(q3_2019)
colnames(q4_2019)
colnames(q1_2020)

#renaming columns to ensure uniformity
(q4_2019 <- rename(q4_2019
                   ,ride_id = trip_id
                   ,rideable_type = bikeid 
                   ,started_at = start_time  
                   ,ended_at = end_time  
                   ,start_station_name = from_station_name 
                   ,start_station_id = from_station_id 
                   ,end_station_name = to_station_name 
                   ,end_station_id = to_station_id 
                   ,member_casual = usertype))

(q3_2019 <- rename(q3_2019
                   ,ride_id = trip_id
                   ,rideable_type = bikeid 
                   ,started_at = start_time  
                   ,ended_at = end_time  
                   ,start_station_name = from_station_name 
                   ,start_station_id = from_station_id 
                   ,end_station_name = to_station_name 
                   ,end_station_id = to_station_id 
                   ,member_casual = usertype))

(q2_2019 <- rename(q2_2019
                   ,ride_id = "X01...Rental.Details.Rental.ID"
                   ,rideable_type = "X01...Rental.Details.Bike.ID" 
                   ,started_at = "X01...Rental.Details.Local.Start.Time"  
                   ,ended_at = "X01...Rental.Details.Local.End.Time"  
                   ,start_station_name = "X03...Rental.Start.Station.Name" 
                   ,start_station_id = "X03...Rental.Start.Station.ID"
                   ,end_station_name = "X02...Rental.End.Station.Name" 
                   ,end_station_id = "X02...Rental.End.Station.ID"
                   ,member_casual = "User.Type"))

str(q2_2019$ride_id)
str(q3_2019$ride_id)
str(q4_2019$ride_id)
str(q1_2020$ride_id)

str(q2_2019$rideable_type)
str(q3_2019$rideable_type)
str(q4_2019$rideable_type)
str(q1_2020$rideable_type)

#to change datatypes of columns to character
q4_2019 <- mutate(q4_2019, ride_id = as.character(ride_id)
                  ,rideable_type = as.character(rideable_type))
q3_2019 <- mutate(q3_2019, ride_id = as.character(ride_id)
                  ,rideable_type = as.character(rideable_type))

q2_2019 <- mutate(q2_2019, ride_id = as.character(ride_id)
                  ,rideable_type = as.character(rideable_type))

#combining rows from all quarter dataframes into one
all_trips <- bind_rows(q2_2019,q3_2019,q4_2019,q1_2020)

#deleting certain columns from the dataframe
all_trips <- all_trips %>% 
  select(-c(start_lat,start_lng,end_lat,end_lng,birthyear,gender,"X01...Rental.Details.Duration.In.Seconds.Uncapped","X05...Member.Details.Member.Birthday.Year","Member.Gender","tripduration"))

head(all_trips)

unique(all_trips$member_casual)

#recode values in a column to its appropriate alternate
all_trips <- all_trips %>% 
  mutate(member_casual = recode(member_casual,"Subscriber"="member","Customer"="casual"))

unique(all_trips$member_casual)

#add a new column that is the date format of 'started_at' column
all_trips$date <- as.Date(all_trips$started_at)


#extract month (01 for Jan, 02 for Feb, 03 for March,....)
all_trips$month <- format(as.Date(all_trips$date),"%m")

#extract day (01,02,03,04,...)
all_trips$day <- format(as.Date(all_trips$date),"%d")

#extract year (2019, 2020)
all_trips$year <- format(as.Date(all_trips$date),"%Y")

#extract day_of_week (Sunday, Monday, Tuesday,...)
all_trips$day_of_week <- format(as.Date(all_trips$date),"%A")

head(all_trips)

#finding length of ride by subtracting start time from end time
all_trips$ride_length <- difftime(all_trips$ended_at,all_trips$started_at)

#changing datatype of ride_length to numeric
all_trips$ride_length <- as.numeric(as.character(all_trips$ride_length))

all_trips_v2 <- all_trips[!(all_trips$start_station_name == "HQ QR" | all_trips$ride_length < 0),]

#MEAN
aggregate(all_trips_v2$ride_length ~ all_trips_v2$member_casual, FUN = mean)

#MEDIAN
aggregate(all_trips_v2$ride_length ~ all_trips_v2$member_casual, FUN = median)

#MAX
aggregate(all_trips_v2$ride_length ~ all_trips_v2$member_casual, FUN = max)

#MIN
aggregate(all_trips_v2$ride_length ~ all_trips_v2$member_casual, FUN = min)

aggregate(all_trips_v2$ride_length ~ all_trips_v2$member_casual + all_trips_v2$day_of_week, FUN = mean)

all_trips_v2$day_of_week <- ordered(all_trips_v2$day_of_week,levels=c("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"))

library(lubridate)

#ridership data(no.of rides and average ride length)
all_trips_v2 %>% 
  mutate(weekday = wday(started_at,label=TRUE)) %>%  
  group_by(member_casual,weekday) %>% 
  summarize(number_of_rides = n(),average_duration=mean(ride_length)) %>% 
  arrange(member_casual,weekday)

library(ggplot2)

#TOTAL NO. OF RIDES per day of week
all_trips_v2 %>% 
  mutate(weekday = wday(started_at,label=TRUE)) %>%  #label=TRUE returns the weekday in characters
  group_by(member_casual,weekday) %>% 
  summarize(number_of_rides = n(),average_duration=mean(ride_length)) %>% 
  arrange(member_casual,weekday) %>% 
  ggplot(aes(x=weekday,y=number_of_rides,fill=member_casual)) + geom_col(position = "dodge")

#AVERAGE DURATION OF RIDE per day of week
all_trips_v2 %>% 
  mutate(weekday = wday(started_at,label=TRUE)) %>%  
  group_by(member_casual,weekday) %>% 
  summarize(number_of_rides = n(),average_duration=mean(ride_length)) %>% 
  arrange(member_casual,weekday) %>% 
  ggplot(aes(x=weekday,y=average_duration,fill=member_casual)) + geom_col(position = "dodge")

#Median ride length per day of week
all_trips_v2 %>% 
  mutate(weekday = wday(started_at,label=TRUE)) %>%  
  group_by(member_casual,weekday) %>% 
  summarize(number_of_rides = n(),median_duration=median(ride_length)) %>% 
  arrange(member_casual,weekday) %>% 
  ggplot(aes(x=weekday,y=median_duration,fill=member_casual)) + geom_col(position = "dodge")

#average ride length per month
all_trips_v2 %>% 
  mutate(month = month(started_at, label=TRUE)) %>%  
  group_by(member_casual,month) %>% 
  summarize(number_of_rides = n(),average_duration=mean(ride_length)) %>% 
  arrange(member_casual,month) %>% 
  ggplot(aes(x=month,y=number_of_rides,fill=member_casual)) + geom_col(position = "dodge")
