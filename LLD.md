# Low Level Design (LLD)

## Overview

This is a simple WhatsApp chatbot using Whapi API and basic keyword-based logic.

## Components

1. WhatsApp (User)
2. Whapi API (Webhook)
3. Node.js Server

## Flow

1. User sends message "AI-Academy"
2. Server sends welcome message
3. User asks question
4. Server checks keywords in the message
5. Based on keyword, predefined response is sent back

## Context Handling

Course details are hardcoded in the server and used for generating responses.

## Avoiding WhatsApp Ban

* Only one number is used for testing
* No bulk messaging
* Only replies when user sends message

## Limitations

* No LLM used (only keyword-based responses)
* No database
* No conversation memory
* Limited understanding of user queries
* Static responses
