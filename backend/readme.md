# API Documentation

## POST /users/register

### Description
Registers a new user. The endpoint validates the following:
- Unique and valid email.
- A user's full name consists of firstname (required, minimum 3 characters) and lastname (optional, minimum 3 characters if provided).
- Password (required, minimum 6 characters).

### Request Body
```json
{
  "fullname": {
    "firstname": "string (min 3 characters, required)",
    "lastname": "string (min 3 characters, optional)"
  },
  "email": "string (valid email format, required)",
  "password": "string (min 6 characters, required)"
}
```

### Success Response
- **Status Code:** 201 Created  
- **Content:** JSON object containing a JWT token and the created user object.
```json
{
  "token": "jwt-token-string",
  "user": { 
    "...user details..."
  }
}
```

### Error Responses
- **Status Code:** 400 Bad Request  
  Occurs if required fields are missing or validation fails.

## POST /users/login

### Description
Logs in an existing user. Validates the provided email and password, returning a JWT token and user details upon successful authentication.

### Request Body
```json
{
  "email": "string (valid email format, required)",
  "password": "string (min 6 characters, required)"
}
```

### Success Response
- **Status Code:** 200 OK  
- **Content:** JSON object containing a JWT token and the user object.
```json
{
  "token": "jwt-token-string",
  "user": { 
    "...user details..."
  }
}
```

### Error Responses
- **Status Code:** 400 Bad Request  
  Occurs if required fields are missing or validation fails.
- **Status Code:** 401 Unauthorized  
  Occurs if the email or password is incorrect.
