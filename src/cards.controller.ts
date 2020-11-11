import {Controller, Get, Req} from '@nestjs/common';
import {Request} from 'express';
@Controller('cards')
export class CardsController {
    @Get('/')
    getIndex(@Req() request: Request): string {
        return `my first controller: ${request.method}`;
    }
}