# Use an official Node.js base image with version 20.12.2
FROM node:20.12.2 as nodebuilder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package.json package-lock.json ./

# Install Node.js dependencies
RUN npm install

# Copy the frontend code and build static files
COPY . .
RUN npm run build

# Use an official Maven base image with JDK 19
FROM maven:3.8-openjdk-19 as javabuilder

# Set the working directory
WORKDIR /javaapp

# Copy the Java application source
COPY --from=nodebuilder /app/src/main/resources/static /javaapp/src/main/resources/static
COPY . /javaapp

# Build the Java application
RUN mvn clean install -DskipTests

# Use the official OpenJDK base image for the runtime environment
FROM openjdk:19-jdk-slim

# Set the working directory in the Docker image
WORKDIR /app

# Copy the built Java application from the build stage
COPY --from=javabuilder /javaapp/target/*.jar ./app.jar

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "app.jar"]