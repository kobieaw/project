import { Injectable } from '@nestjs/common';
import { IPFSHTTPClient } from 'ipfs-http-client';
import { create } from 'ipfs-http-client';
import { MetadataDto } from './dtos/dtos/metadata.dto';
import { FileData } from './schemas/file-data.interface';
import { FileDataDto } from './dtos/dtos/file-data.dto';
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

//Creating a JSON schema for the file data
// const DB_PATH = './db/file-data.json';

@Injectable()
export class AppService {
  ipfsClient: IPFSHTTPClient;
  lastId: number;

  //Creating the ipfs client that creates a localhost
  //...with port 5001, and on the http protocol
  constructor() {
    //Creating the db varialbe to store the file data
    // this.db = new JsonDB(new Config(DB_PATH, true, true, '/'));
    this.ipfsClient = create({
      host: 'localhost',
      port: 5001,
      protocol: 'http',
    });
  }
  //Seeing if the ipfs node is online
  isIpfsNodeOnline() {
    try {
      const state = this.ipfsClient.isOnline();
      return state;
    } catch (error) {
      return error;
    }
  }
  getHello() {
    return 'Hello World!';
  }

  //Creating a method to get the metadata by id
  getMetadataById(id: number) {
    // let file: any;
    // let metadata: MetadataDto;
    try {
      const metadata = this.ipfsClient.get(id);
      return metadata;
    } catch (error) {
      return error;
    }
  }
}
