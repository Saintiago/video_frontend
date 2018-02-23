// https://virtserver.swaggerhub.com/ilya.shikhaleev/go-workshop-2018/1.0.0
const BASE_URL = '';

export const STATUS_REQUEST_URL = BASE_URL + '/api/v1/video/%id%/status';
export const LIST_REQUEST_URL = BASE_URL + '/api/v1/list%query%';
export const VIDEO_REQUEST_URL = BASE_URL + '/api/v1/video/%id%';
export const UPLOAD_VIDEO_URL = BASE_URL + '/api/v1/video';

export const STATUS_REQUEST_DELAY = 2000;
