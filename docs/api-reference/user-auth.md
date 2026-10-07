# User Authentication API
The Authentication API manages user identity verification, JSON Web Token (JWT) issuance, and token rotation.

**Base URL:** `https://api.example.com/v1/auth`  
**Authentication:** Public (Login/Refresh) / Bearer Token (Protected endpoints)

---

## `POST` /api/v1/auth/login
Authenticates credentials and returns a short-lived `accessToken` along with a long-lived `refreshToken`.

### Request Headers
| Header | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `Content-Type` | `string` | Yes | Must be `application/json`. |

### Request Body Parameters
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `email` | `string` | Yes | Registered account email address. |
| `password` | `string` | Yes | Account password. |

### Sample Request Payload
```json
{
  "email": "user@example.com",
  "password": "SecurePassword123!"
}
```


### Sample Response (200 OK)
```json
{ 
  "status": "success",
   "data": {
    "accessToken": "eyJhbGciOiJIUzI1Ni...",
    "refreshToken": "d9b0f7d2-1234-4567-89ab-cdef01234567",
    "expiresIn": 3600
   }
}
```


## `POST` /api/v1/auth/refresh
Exchanges a valid refresh token for a new access token when the current token expires.

### Request Body Parameters
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `refreshToken` | `string` | Yes | Valid refresh token generated during login. |

### Response Status Codes
| Status Code | Description |
| --- | --- |
| `200 OK` | Token refreshed successfully |
| `400 Bad Request` | Invalid payload |
| `401 Unauthorized` | Invalid or expired token |

