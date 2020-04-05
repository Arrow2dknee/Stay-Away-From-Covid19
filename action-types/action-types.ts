export const actionIds = {
    API_REQUEST_START: 'request for data in api',
    API_REQUEST_COMPLETED: 'api data fetched',
  }
  
  export interface BaseAction {
    type : string;
    payload?;
  }
