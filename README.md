# Digital Paani Backend Assignment

## Requirements
   - User authentication
   - CRUD operations for managing book entries (e.g., title,author,publication year).
   - Filtering books by author or publication year.
   - Clear documentation of API endpoints and their usage.
   - Implementation of basic security measures (like input validation).

## Completed
   - User authentication
   - CRUD operations for managing book entries (e.g., title,author,publication year).
   - Filtering books by author or publication year.
   - Clear documentation of API endpoints and their usage.
   - Implementation of basic security measures (like input validation).
  
## Tech Stack Used
 - Nestjs - is a framework for building efficient, scalable Node.js server-side applications
 - Nodejs v21.7.3
 - Graphql - is a query language for APIs and a runtime for fulfilling those queries with your existing data.
 - Jwt - JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims.
 - Bcrypt - is a password-hashing function
 - Mongodb - a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas.
 - Mongoose - provides a straight-forward, schema-based solution to model your application data
  
## Description
As per requirements asked above I have used nestjs as a framework to write server side applications.

#### Below is the skeleton Module for the app 
- src 
  - book
    - book.resolver.ts
    - book.repo.ts
    - book.module.ts
    - book.service.ts
    - book.schema.ts
    - book.dto.ts
  
- main.ts

#### Below is the explanation of the services added

User authentication Service - 
- It's have two endpoints
  - login - to get the jwt token which will use to validate each request
  - signup - to create user account in the system. 
- Implemented email address validation to ensure uniqueness within the system, enhancing data integrity.
- Enhanced security by storing passwords as hashed values, preventing unauthorized access to sensitive information.
- Implemented AuthGuard to validate authorization tokens from request headers, ensuring secure access to protected routes.
- Utilized the UserRef Decorator to map validated JWT token information to the UserRef Type, streamlining user authentication and authorization processes.
- Introduced PublicGuard to allow public requests without validating JWT tokens, improving accessibility to certain routes.
- Enabled global token verification to enforce authentication and authorization across the application, enhancing overall security measures.
  
Book Service
  - Its have Five endpoints
      - createBook - to create new books with Author reference
      - updateBook - to update the existing book
      - findOneBook - to get single book with id 
      - findManyBooks - to filter books based on author name, author email or publishing years
      - deleteBook  - to delete the book from system

Implemented a modular repository structure where each module has its own repository extending a common base repository class. This approach minimizes code duplication and ensures consistency across modules.

Transitioned from REST API to GraphQL for enhanced data querying and retrieval. GraphQL offers structured typing and returns only the requested data, reducing runtime type mismatches and improving type safety.

Followed a domain-specific module structure, ensuring that each module is independent and encapsulated. This facilitates future scalability, allowing for easy transition to microservices architecture.

The server is hosted on port 3000, and GraphQL Playground provides a comprehensive interface for exploring endpoints, their arguments, and return types. The Docs tab offers detailed documentation, streamlining the understanding of API functionality.

## Below are the following steps to setup the server

## prerequisite

Below are the property need in env to run the server . Please use the existing one which are already added in repo else update accordingly 

 - JWT_SECRET="secret"
 - JWT_EXPIRES_IN="60000s"
 - MONGODB_URL="mongodb://localhost:27017/digital-paani"
  

### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```
Open in browser 
[http://localhost:3000/graphql](http://localhost:3000/graphql)
to check graphql Server Running With Graphql Playground

## Stay in touch

- Author - [Ashutosh Singh](https://kamilmysliwiec.com)
- Website - [https://ashutoshpith.com](https://ashutoshpith.com/)
- LinkedIn - [@ashutoshpith](https://www.linkedin.com/in/ashutoshpith/)

## License
It is [MIT licensed](LICENSE).

