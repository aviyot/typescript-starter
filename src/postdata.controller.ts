import {Controller,Post,Body, Get} from '@nestjs/common';

@Controller('post')
export class PostDataController {
    res:string;
    @Post()
    postData(@Body('fullName') fullName: string):any {
        this.res = `full name is ${fullName}`
    return this.res;
    }

    @Get()
    showData(){
        return this.res;
    }
}