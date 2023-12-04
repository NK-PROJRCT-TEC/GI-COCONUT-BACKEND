import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReportStemMorphologyService {
  private env = environment;
  private SelectReportStemMorphologyUrl: string = `${this.env.API_PATH}/SelectReportStemMorphology`;
  constructor(private http: HttpClient) {
  }
  SelectReportStemMorphology(code_tree: any) {
    return this.http.post(this.SelectReportStemMorphologyUrl,
      { code_tree: code_tree });
  }

}
