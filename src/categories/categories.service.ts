import { PrismaService } from './../prisma/prisma/prisma.service';
import { Body, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaExceptionFilter } from 'src/exceptions-filter/prisma.exception-filter';

@Injectable()
export class CategoriesService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prismaService: PrismaService) {}

  create(@Body() createCategoryDto: CreateCategoryDto) {
    // DTO = Data Transfer Object
    return this.prismaService.category.create({
      data: createCategoryDto,
    });
  }

  findAll() {
    return this.prismaService.category.findMany();
  }

  findOne(id: number) {
    return this.prismaService.category.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prismaService.category.update({
      where: {
        id,
      },
      data: updateCategoryDto,
    });
  }

  remove(id: number) {
    return this.prismaService.category.delete({
      where: {
        id,
      },
    });
  }
}
