import Ajv from 'ajv'

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

export function validateList(data) {
  return ajv.validate(listResponseSchema, data);
}

export function validateVideo(data) {
  return ajv.validate(videoResponseSchema, data);
}