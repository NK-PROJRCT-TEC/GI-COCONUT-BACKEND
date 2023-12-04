import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReportInflorescenceAndFlowerMorphologyService {
  private env = environment;
  private SelectReportInflorescenceAndFlowerMorphologyUrl: string = `${this.env.API_PATH}/SelectReportInflorescenceAndFlowerMorphology`;
  constructor(private http: HttpClient) {
  }
  SelectReportInflorescenceAndFlowerMorphology(code_tree: any) {
    return this.http.post(this.SelectReportInflorescenceAndFlowerMorphologyUrl,
      { code_tree: code_tree });
  }

}