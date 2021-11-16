import VitalSigns from 'vitalsigns';
import { INestApplication } from '@nestjs/common';

export class VitalSignsModule {
  static bootstrap(app: INestApplication) {
    const httpAdapter = app.getHttpAdapter();

    const vitals = new VitalSigns();

    vitals.monitor('cpu');
    vitals.monitor('mem', { units: 'MB' });
    vitals.monitor('tick');

    httpAdapter.get('/health', vitals.express);
  }
}
