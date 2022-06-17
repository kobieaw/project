import { Injectable, StreamableFile } from '@nestjs/common';
import { IPFSHTTPClient } from 'ipfs-http-client';
import { create } from 'ipfs-http-client';
// import { MetadataDto } from './dtos/dtos/metadata.dto';
// import { FileData } from './schemas/file-data.interface';
// import { FileDataDto } from './dtos/dtos/file-data.dto';
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

//Creating a JSON schema for the file data
const DB_PATH = './db/file-data.json';

@Injectable()
export class AppService {
  ipfsClient: IPFSHTTPClient;
  lastId: number;
  db: JsonDB;

  //Creating the ipfs client that creates a localhost
  //...with port 5001, and on the http protocol
  constructor() {
    //Creating the db varialbe to store the file data
    this.db = new JsonDB(new Config(DB_PATH, true, true, '/'));
    this.ipfsClient = create({
      host: 'localhost',
      port: 5001,
      protocol: 'http',
    });
    const data = this.db.getData('/');
    this.lastId =
      data && Object.keys(data).length > 0
        ? Math.max(...Object.keys(data).map((key) => Number(key)))
        : -1;
  }

  // pushFile(fileData: FileDataDto) {}

  //Seeing if the ipfs node is online
  isIpfsNodeOnline() {
    try {
      const state = this.ipfsClient.isOnline();
      return state;
    } catch (error) {
      return error;
    }
  }
  // async saveToIpfs(fileId: number) {
  //   const fileData: FileData = this.get(fileId);
  //   const fileLocation = `../upload/${fileData.file.storageName}`;
  //   const fileBytes = fs.readFileSync(fileLocation);
  //   const ipfsData = await this.ipfsClient.add(fileBytes);
  //   this.db.push(`/${fileId}/ipfs`, ipfsData);
  //   return this.get(fileId);
  // }
  //Returning all of the information in the database
  getAll() {
    return this.db.getData('/');
  }
  getHello() {
    return 'Hello World!';
  }

  //Creating a method to get the metadata by id
  getMetadataById(id: string) {
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
