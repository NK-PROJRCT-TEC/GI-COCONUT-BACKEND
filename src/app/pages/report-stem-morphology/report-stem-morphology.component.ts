import { Component } from '@angular/core';
import { ReportStemMorphologyService } from './shared/report-stem-morphology.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-report-stem-morphology',
  templateUrl: './report-stem-morphology.component.html',
  styleUrls: ['./report-stem-morphology.component.css']
})
export class ReportStemMorphologyComponent {
  constructor(private ReportStemMorphologyService: ReportStemMorphologyService) { }
  arr: any[] = [];
  code_tree: any
  ngOnInit(): void {
    this.code_tree = localStorage.getItem("code_tree")
    console.log(this.code_tree)
    this.ReportStemMorphologyService.SelectReportStemMorphology(this.code_tree).subscribe((res: any) => {
      if (res.length > 0) {
        this.arr = res
        console.log(this.arr)
      }
      else {
        Swal.fire({
          icon: 'warning',
          title: '<h6 style="font-family: Kanit-Regular;">ไม่พบข้อมูล</h6>'
        })
      }
    });
  }
}
