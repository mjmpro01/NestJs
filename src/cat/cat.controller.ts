import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpCode, Header, Redirect, Query, HttpException, HttpStatus, ParseIntPipe, UsePipes, UseGuards, SetMetadata } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { JoiValidationPipe } from '../JoiValidationPipe';
import { Cat } from './entities/cat.entity';
import { RolesGuard } from 'src/roles.guard';
import { Roles } from 'src/roles.decorator';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) { }

  @Post()
  @HttpCode(204)
  @Header('Minh', 'none')
  @UseGuards(new RolesGuard())
  @SetMetadata('roles',['admin']) // set role for controller
  @Roles('admin')
  // @UsePipes(new JoiValidationPipe(Cat)) validate params
  create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }
  @Get()
  findAll() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  redirect(){
    return 'oke';
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: string) {
    return this.catService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catService.remove(+id);
  }

  

}
