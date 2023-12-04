import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReportLeafMorphologyService {
  private env = environment;
  private SelectReportLeafMorphologyUrl: string = `${this.env.API_PATH}/SelectReportLeafMorphology`;
  constructor(private http: HttpClient) {
  }
  SelectReportLeafMorphology(code_tree: any) {
    return this.http.post(this.SelectReportLeafMorphologyUrl,
      { code_tree: code_tree });
  }

}
