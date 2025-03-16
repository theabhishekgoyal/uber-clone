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
