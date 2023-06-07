import { Injectable } from '@angular/core';

@Injectable()

export class Constants {
  public static readonly API_ENDPOINT: string = 'localhost:3000/';
  public static readonly USER_ENDPOINT: string = 'localhost:3000/user';
  public static readonly DATA_ENDPOINT: string = 'localhost:3000/data';
  public static apiName: string = 'MongoNode DB';
}