import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { AppService } from './app.service';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('file')
@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

  @Get('ipfs')
  @ApiOperation({
    summary: 'IPFS node connection',
    description: 'Returns true if the IPFS node configured is running',
  })
  @ApiResponse({
    status: 200,
    description: 'IPFS node connection',
    type: Boolean,
  })
  @ApiResponse({
    status: 503,
    description: 'The server is not configured',
    type: HttpException,
  })
  async ipfsOnline() {
    try {
      return this.appService.isIpfsNodeOnline();
    } catch (error) {
      return error;
    }
  }

  //Creating a GET method to get the metadata by id
  @Get('metadata/:id')
  @ApiOperation({
    summary: 'Get metadata by id',
    description: 'Returns the metadata by id',
  })
  @ApiResponse({
    status: 200,
    description: 'Metadata by id',
    type: Object,
  })
  @ApiResponse({
    status: 503,
    description: 'The server is not configured',
    type: HttpException,
  })
  async getMetadataById(@Param('id') id: number) {
    try {
      const result = this.appService.getMetadataById(id);
      return result;
    } catch (error) {
      return error;
    }
  }
}
