# Use the official Maven image with JDK 19 as the build environment
FROM maven:3.8.6-openjdk-19 as build

# Set the working directory in the container
WORKDIR /app

# Copy the Maven project files into the container
COPY pom.xml .

# Copy the rest of your project's files
COPY src src
COPY package*.json ./
COPY postcss.config.js .
COPY tailwind.config.js .

# Optionally install Node.js and build your CSS if necessary
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
RUN npm install && npm run build-css

# Build the application using Maven
RUN mvn clean package -DskipTests

# Use OpenJDK 19 to run the application
FROM openjdk:19-jdk-slim

# Copy the built application JAR from the build stage into this new stage
COPY --from=build /app/target/*.jar /app/app.jar

# Expose the port the application runs on
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "/app/app.jar"]