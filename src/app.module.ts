import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [CatModule, AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
