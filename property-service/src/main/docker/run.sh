#!/bin/sh

echo "********************************************************"
echo "Waiting for the discovery server to start on port $DISCOVERYSERVER_PORT"
echo "********************************************************"
while ! `nc -z discoveryserver $DISCOVERYSERVER_PORT`; do sleep 3; done
echo "******** Discovery Server has started"

echo "********************************************************"
echo "Waiting for the database server to start on port $DATABASESERVER_PORT"
echo "********************************************************"
while ! `nc -z database $DATABASESERVER_PORT`; do sleep 3; done
echo "******** Database Server has started "

echo "********************************************************"
echo "Starting property service via Discovery :  $DISCOVERYSERVER_URI" ON PORT: $SERVER_PORT;
echo "*************************************************** *****"
java -Djava.security.egd=file:/dev/./urandom -Dserver.port=$SERVER_PORT   \
     -Deureka.client.serviceUrl.defaultZone=$DISCOVERYSERVER_URI             \
     -Dspring.profiles.active=$PROFILE -jar /usr/local/propertyservice/@project.build.finalName@.jar
