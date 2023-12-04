import { Component } from '@angular/core';
import { ReportInflorescenceAndFlowerMorphologyService } from './shared/report-inflorescence-and-flower-morphology.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-report-inflorescence-and-flower-morphology',
  templateUrl: './report-inflorescence-and-flower-morphology.component.html',
  styleUrls: ['./report-inflorescence-and-flower-morphology.component.css']
})
export class ReportInflorescenceAndFlowerMorphologyComponent {
  constructor(private ReportInflorescenceAndFlowerMorphologyService: ReportInflorescenceAndFlowerMorphologyService) { }
  arr: any[] = [];
  code_tree: any
  ngOnInit(): void {
    this.code_tree = localStorage.getItem("code_tree")
    console.log(this.code_tree)
    this.ReportInflorescenceAndFlowerMorphologyService.SelectReportInflorescenceAndFlowerMorphology(this.code_tree).subscribe((res: any) => {
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
