# Service Catalog Configuration

## 1. Laptop Request

**Catalog:** Employee Services

**Variables**
- Requested For — Reference: User
- Laptop Type — Select Box: Standard, Developer, Power User
- Business Justification — Multi-line Text
- Required By Date — Date

**Flow**
Approval -> Hardware Support -> Fulfillment -> Completion notification

---

## 2. Software Installation Request

**Variables**
- Requested For — Reference: User
- Software Name — Single Line Text
- Version — Single Line Text
- Business Justification — Multi-line Text

**Flow**
Approval -> Software Support -> Fulfillment -> Completion notification

---

## 3. Access Request

**Variables**
- Requested For — Reference: User
- Application — Single Line Text
- Access Level — Select Box: Read, Write, Admin
- Business Justification — Multi-line Text

**Flow**
Approval -> Access Management -> Fulfillment -> Completion notification
