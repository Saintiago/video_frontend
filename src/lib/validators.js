import Ajv from 'ajv'
import * as status from './videoStatus'

const ajv = new Ajv({allErrors: true});

const listResponseSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "duration": {
        "type": "number"
      },
      "thumbnail": {
        "type": "string"
      },
    },
    "required": [
      "id", "name", "duration", "thumbnail"
    ]
  }
};

const videoResponseSchema = {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "duration": {
        "type": "number"
      },
      "thumbnail": {
        "type": "string"
      },
      "url": {
        "type": "string"
      }
    },
    "required": [
      "id", "name", "duration", "thumbnail", "url"
    ]
};

const statusResponseSchema = {
  "type": "object",
  "properties": {
    "status": {
      "type": "number",
      "enum": [
        status.CREATED,
        status.PROCESSING,
        status.READY,
        status.DELETED,
        status.ERROR
      ]
    }
  }
};

export function validateList(data) {
  return ajv.validate(listResponseSchema, data);
}

export function validateVideo(data) {
  return ajv.validate(videoResponseSchema, data);
}

export function validateStatus(data) {
  return ajv.validate(statusResponseSchema, data)
}