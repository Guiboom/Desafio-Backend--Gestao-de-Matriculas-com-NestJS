import { Injectable } from '@nestjs/common';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { UpdateMatriculaDto } from './dto/update-matricula.dto';
import { Matricula } from './entities/matricula.entity';

@Injectable()
export class MatriculasService {
  private matriculas: Matricula[] = [];

  create(codigo_matricula: string, nome_completo: string, acompanhamento: string, situacao: string,) {
    //Nova matricula
    const novoMatricula = new Matricula();
    novoMatricula.id = this.matriculas.length + 1;
    novoMatricula.codigo_matricula = codigo_matricula;
    novoMatricula.nome_completo = nome_completo;
    novoMatricula.acompanhamento = acompanhamento;
    novoMatricula.situacao = situacao;
    if (novoMatricula.nome_completo == '' && novoMatricula.codigo_matricula != '') {
      return `O campo 'nome_completo' deve ser preeenchido`;
    }
    else if (novoMatricula.nome_completo != '' && novoMatricula.codigo_matricula == '') {
      return `O campo 'codigo_matricula' deve ser preeenchido`;;
    }
    else if (novoMatricula.nome_completo == '' && novoMatricula.codigo_matricula == '') {
      return `O campo 'codigo_matricula' e 'nome_completo' deve ser preeenchido`;
    }
    else if (novoMatricula.nome_completo != '' && novoMatricula.codigo_matricula != '') {
      this.matriculas.push(novoMatricula);
      return novoMatricula;
    }
  }

  findAll() {
    return this.matriculas;
  }

  findOne(id: number) {
    return `This action returns a #${id} matricula`;
  }

  update(id: number, dados: Partial<Matricula>) {
    const index = this.matriculas.findIndex(livro => livro.id == id);
    if (index >= 0) {
      this.matriculas[index] = { ...this.matriculas[index], ...dados };
      return `A matricula #${id} foi atualizado`;
    }
    return `A matricula #${id} não foi atualizado`;
  }

  remove(id: number) {
    return `This action removes a #${id} matricula`;
  }
}
