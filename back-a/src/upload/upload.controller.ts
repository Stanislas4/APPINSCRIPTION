/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { Response } from 'express';
import { createReadStream } from 'fs';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

@Controller('upload')
export class UploadController {

  //Endpoint pour uploader un fichier
  @Get()
  test(){
    return 'TOTO'
  }


 /* @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
  console.log(file);
  return { "data": file.filename };
  }

  @Post('file')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        const filename = `${uniqueSuffix}${ext}`;
        callback(null, filename);
      },
    }),
  }),
  )
  handleUpload(
    @UploadedFile() file: Express.Multer.File
  ) {
    console.log('file', file);
    return { "data": file.filename };
  }*/

  //
  // Endpoint pour récupérer un fichier PDF spécifique
  @Get(':filename')
  getPdf(@Param('filename') filename: string, @Res() res: Response) {
    const filePath = join('./uploads', filename);
    const stream = createReadStream(filePath);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename=sample.pdf',
    });

    stream.pipe(res);
  }
}
