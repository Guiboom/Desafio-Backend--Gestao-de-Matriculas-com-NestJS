import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatriculasModule } from './matriculas/matriculas.module';

@Module({
  imports: [MatriculasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
