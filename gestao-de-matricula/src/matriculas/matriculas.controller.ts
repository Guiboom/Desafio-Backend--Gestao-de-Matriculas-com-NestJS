import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatriculasService } from './matriculas.service';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { UpdateMatriculaDto } from './dto/update-matricula.dto';
import { Matricula } from './entities/matricula.entity';

@Controller('matriculas')
export class MatriculasController {
  constructor(private readonly matriculasService: MatriculasService) { }

  @Post()
  create(@Body() dados: { codigo_matricula: string; nome_completo: string; acompanhamento: string; situacao: string; }) {
    return this.matriculasService.create(dados.codigo_matricula, dados.nome_completo, dados.acompanhamento, dados.situacao);
  }

  @Get()
  findAll() {
    return this.matriculasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matriculasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatriculaDto: UpdateMatriculaDto) {
    return this.matriculasService.update(+id, updateMatriculaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matriculasService.remove(+id);
  }
}
