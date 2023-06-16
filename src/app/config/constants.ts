import { Injectable } from '@angular/core';

@Injectable()

export class Constants {
  public static readonly API_ENDPOINT: string = 'http://localhost:3000/';
  public static readonly USERS_ENDPOINT: string = 'http://localhost:3000/users';
  public static readonly DATA_ENDPOINT: string = 'http://localhost:3000/data';
  public static apiName: string = 'MongoNode DB';
  public static readonly SOCKETIOCONFIG = { url: 'http://localhost:8988', options: {}};
}