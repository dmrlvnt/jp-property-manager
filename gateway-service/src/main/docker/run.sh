#!/bin/sh

echo "********************************************************"
echo "Waiting for the discovery server to start on port $DISCOVERYSERVER_PORT"
echo "********************************************************"
while ! `nc -z discoveryserver $DISCOVERYSERVER_PORT`; do sleep 3; done
echo "******** Discovery Server has started"

echo "********************************************************"
echo "Waiting for the property service to start on port $PROPERTYSERVICE_PORT"
echo "********************************************************"
while ! `nc -z propertyservice $PROPERTYSERVICE_PORT`; do sleep 3; done
echo "******** Property Service has started "

echo "********************************************************"
echo "Waiting for the redis server to start on port $REDISSERVER_PORT"
echo "********************************************************"
while ! `nc -z  key-value $REDISSERVER_PORT`; do sleep 3; done
echo "******** Redis Server has started "

echo "********************************************************"
echo "Starting gateway service via Discovery :  $DISCOVERYSERVER_URI" ON PORT: $SERVER_PORT;
echo "*************************************************** *****"
java -Djava.security.egd=file:/dev/./urandom -Dserver.port=$SERVER_PORT   \
     -Deureka.client.serviceUrl.defaultZone=$DISCOVERYSERVER_URI             \
     -Dspring.profiles.active=$PROFILE -jar /usr/local/gatewayservice/@project.build.finalName@.jar
