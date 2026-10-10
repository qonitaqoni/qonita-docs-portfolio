## `POST` /api/v1/auth/register
Creates an account in the system.

### Endpoint Details
| Attribute | Type | Description |
| :--- | :--- | :--- |
| Base URL | `string` | [`https://api.example.com`](https://api.example.com) |
| Auth Required | `boolean` | `false` |
| Content-Type | `string` | `application/json` |


### Request Body Parameters
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `email` | `string` | Yes | User account email address. |
| `password` | `string` | Yes | Account authentication password. |
| `fullName` | `string` | Yes | Full registered name of the user. |

### Sample Request Payload
```json
{
  "email": "user@example.com",
  "password": "SecurePassword123!",
  "fullName": "Ahmad Rizki"
}
```


### Response Status Codes
| Status Code | Description |
| --- | --- |
| `201 Created` | Client's request has been successfully fulfilled. |
| `400 Bad Request` | Server cannot or will not process the request. |
| `409 Conflict` | Client-side error, the request could not be completed because it conflicts. |



