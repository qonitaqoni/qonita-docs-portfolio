# PostgreSQL Local Setup Guide

## Prerequisites
* Docker Desktop
* pql / Database Client
* Minimum 4GB RAM

## Installation Steps
1. Pull the latest official PostgreSQL image from Docker Hub.
2. Run the container with environment variables for user credentials.   


```bash
docker run --name local-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
```


> _Ensure port 5432 is not occupied by another local service before running._