import { FileDataDto } from 'src/block/dto/file-data.dto';
import { IpfsDataDto } from 'src/block/dto/ipfs-data.dto';
import { MetadataDto } from 'src/block/dto/metadata.dto';

export class FileData {
  constructor(
    public file?: FileDataDto,
    public metadata?: MetadataDto,
    public ipfs?: IpfsDataDto,
  ) {}
}
