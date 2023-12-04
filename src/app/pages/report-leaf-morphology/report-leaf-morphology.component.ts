import { Component } from '@angular/core';
import { ReportLeafMorphologyService } from './shared/report-leaf-morphology.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-report-leaf-morphology',
  templateUrl: './report-leaf-morphology.component.html',
  styleUrls: ['./report-leaf-morphology.component.css']
})
export class ReportLeafMorphologyComponent {

  constructor(private ReportLeafMorphologyService: ReportLeafMorphologyService) { }
  arr: any[] = [];
  code_tree: any
  ngOnInit(): void {
    this.code_tree = localStorage.getItem("code_tree")
    console.log(this.code_tree)
    this.ReportLeafMorphologyService.SelectReportLeafMorphology(this.code_tree).subscribe((res: any) => {
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



