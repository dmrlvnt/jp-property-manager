#!/bin/sh
echo "********************************************************"
echo "Starting the Discovery Server"
echo "********************************************************"
java -Djava.security.egd=file:/dev/./urandom -jar /usr/local/discoveryservice/@project.build.finalName@.jar
