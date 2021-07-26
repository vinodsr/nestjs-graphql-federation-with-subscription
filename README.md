# How to enable subscription in apollo graphql federated server using nestJS

This repo is based on [this](https://vinodsr.com/myblog/2021/07/how-to-enable-subscription-in-apollo-federation-with-nestjs-graphql/) blog.

# Installation

Each of the folder is a valid npm project. You can run `npm install` to setup the dependencies and then run `npm run start` to run the application.

# Project details

| Folder                        | Details                     |
| ----------------------------- | --------------------------- |
| graphql-federation-server     | the federation gateway      |
| graphql-federation-department | the department microservice |
| graphql-federation-user       | the user microservice       |

# Playground Urls

| Url                           | Description                                                    |
| ----------------------------- | -------------------------------------------------------------- |
| http://localhost:4000/graphql | Playground for the gatway ( contains both user and department) |
| http://localhost:3001/graphql | Playground for user service                                    |
| http://localhost:3002/graphql | Playground for department service                              |
