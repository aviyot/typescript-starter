import {Controller,Post,Body, Get} from '@nestjs/common';

@Controller('post')
export class PostDataController {
    res:string;
    @Post()
    postData(@Body('fullName') fullName: any):any {
        this.res = `full name is ${fullName}`
        return {post: this.res} 
    }

    @Get()
    showData(){
        return {post: this.res} 
    }
}