# ServiceNow Developer Interview Prep

## Client Script vs Business Rule
Client Script runs on the client/browser and is primarily used for form behavior and validation.
Business Rule runs server-side and is used for data processing and enforcement.

## UI Policy vs Client Script
UI Policy is preferred for simple mandatory/visible/read-only behavior.
Client Script is used when logic requires scripting.

## GlideRecord
Server-side API used to query, insert, update and delete records.

## GlideAjax
Used by client-side scripts to call server-side Script Includes asynchronously.

## Script Include
Reusable server-side JavaScript logic. It can be called from server-side code or, when client callable, through GlideAjax.

## Flow Designer
Used for process automation and orchestration. It is easier to maintain than custom scripting for many workflow-style requirements.

## ACL
Controls who can perform operations such as create, read, write and delete on tables/records/fields.

## Before vs After Business Rule
Before: modify/validate the current record before database operation.
After: execute logic after the record has been saved.

## Why this architecture?
Validation stays close to the UI where appropriate, server-side rules protect data integrity, and Flow Designer handles multi-step business processes.
