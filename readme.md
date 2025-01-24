# 🕵️‍♂️ IMF Gadget API: Classified Mission Manual 🕵️‍♀️

## 🚨 TOP SECRET: Operational Intelligence

### 🛠 Mission Infrastructure
- **Backend**: Node.js & Express
- **Database**: PostgreSQL
- **Authentication**: JWT Encryption
- **Deployment**: Railway Secure Servers

### 🌐 Base Operational URL
`https://imf-production.up.railway.app`

---

## 📡 ENDPOINT PROTOCOLS

### 1. Gadget Reconnaissance
`GET /gadgets`

#### Mission Parameters
- **Objective**: Retrieve gadget inventory
- **Authentication**: JWT Required
- **Query Filter**: `status` (Optional)
  - `Available`
  - `Deployed`
  - `Destroyed`
  - `Decommissioned`

#### Operational Request
```bash
curl -H "Authorization: Bearer <SECRET_TOKEN>" \
     https://imf-production.up.railway.app/gadgets?status=Available
```

#### Intelligence Response
```json
[{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "name": "Laser Watch",
  "codename": "The Silent Valkyrie",
  "status": "Available",
  "successProbability": 87
}]
```

### 2. Gadget Fabrication
`POST /gadgets`

#### Mission Parameters
- **Objective**: Create new technological asset
- **Authentication**: Top-Level Clearance
- **Payload**: Device Specifications

#### Operational Request
```bash
curl -X POST \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer <SECRET_TOKEN>" \
     -d '{"name":"Quantum Disruptor"}' \
     https://imf-production.up.railway.app/gadgets
```

#### Intelligence Response
```json
{
  "id": "unique-device-identifier",
  "name": "Quantum Disruptor",
  "codename": "The Golden Phoenix",
  "status": "Available"
}
```

### 3. Gadget Evolution
`PATCH /gadgets/:id`

#### Mission Parameters
- **Objective**: Modify existing technological asset
- **Authentication**: High-Level Clearance
- **Payload**: Update Specifications

#### Operational Request
```bash
curl -X PATCH \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer <SECRET_TOKEN>" \
     -d '{"name":"Enhanced Laser Watch"}' \
     https://imf-production.up.railway.app/gadgets/device-id
```

### 4. Mission Retirement
`DELETE /gadgets/:id`

#### Mission Parameters
- **Objective**: Decommission technological asset
- **Authentication**: Executive Clearance
- **Action**: Mark device as non-operational

#### Operational Request
```bash
curl -X DELETE \
     -H "Authorization: Bearer <SECRET_TOKEN>" \
     https://imf-production.up.railway.app/gadgets/device-id
```

### 5. Extreme Contingency Protocol
`POST /gadgets/:id/self-destruct`

#### Mission Parameters
- **Objective**: Eliminate compromised technological asset
- **Authentication**: Highest Security Clearance
- **Outcome**: Complete device neutralization

#### Operational Request
```bash
curl -X POST \
     -H "Authorization: Bearer <SECRET_TOKEN>" \
     https://imf-production.up.railway.app/gadgets/device-id/self-destruct
```

#### Intelligence Response
```json
{
  "message": "Self-destruct sequence initiated",
  "confirmationCode": "ABC123",
  "gadget": {
    "status": "Destroyed"
  }
}
```

---

## 🔐 Security Protocols
- All communications encrypted
- JWT token required
- Strict status management
- Randomized success probability
- Self-destruct capabilities

*This document will auto-destruct upon mission completion* 🕶️
