import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReportFruitAppearanceService {
  private env = environment;
  private SelectReportFruitAppearanceUrl: string = `${this.env.API_PATH}/SelectReportFruitAppearance`;
  constructor(private http: HttpClient) {
  }
  SelectReportFruitAppearance(code_tree: any) {
    return this.http.post(this.SelectReportFruitAppearanceUrl,
      { code_tree: code_tree });
  }

}
