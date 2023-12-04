import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReportGiCoconutService {
  private env = environment;
  private SelectReportGicoconutUrl: string = `${this.env.API_PATH}/SelectReportGicoconut`;
  constructor(private http: HttpClient) {
  }
  SelectReportGicoconut() {
    return this.http.get(this.SelectReportGicoconutUrl,
      {  });
  }

}
