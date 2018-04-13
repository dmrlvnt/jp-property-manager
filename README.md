# JP (Jean Paul) Property Manager

The JP property manager is a piece of software that allow a user to add/remove/modify a property and its attributes.

## Software needed
1.	Apache Maven (http://maven.apache.org). Version 3.5.2. All of the project code have been compiled with Java version 8.
2.	Git Client (http://git-scm.com). All of the source code for this project is stored in a GitHub repository [jp-properyt-manager](https://github.com/dmrlvnt/jp-property-manager.git). 
2.	Docker (http://docker.com). The code is built Docker.

## Building the Docker Images for JP (Jean Paul) Property Manager
To build the code for JP (Jean Paul) Property Manager as a docker image, open a command-line window and change to the root directory in the source code, 
and run the following maven command. This command will execute the [Spotify docker plugin](https://github.com/spotify/docker-maven-plugin) defined in the pom.xml file.  

   **mvn clean package docker:build**

Running the above command at the root of the project directory will build all of the projects.

## Running the JP (Jean Paul) Property Manager
JP (Jean Paul) Property Manager runs by using docker-compose. To start the services, change to the 
parent directory in the source code and run the following docker-compose command:

   **docker-compose -f docker/assembler/docker-compose.yml up**

At this point all of the services needed for the JP (Jean Paul) Property Manager will be running.