import { Component } from '@angular/core';
import { ReportFruitAppearanceService } from './shared/report-fruit-appearance.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-report-fruit-appearance',
  templateUrl: './report-fruit-appearance.component.html',
  styleUrls: ['./report-fruit-appearance.component.css']
})
export class ReportFruitAppearanceComponent {
  constructor(private ReportFruitAppearanceService: ReportFruitAppearanceService) { }
  arr: any[] = [];
  code_tree: any
  ngOnInit(): void {
    this.code_tree = localStorage.getItem("code_tree")
    console.log(this.code_tree)
    this.ReportFruitAppearanceService.SelectReportFruitAppearance(this.code_tree).subscribe((res: any) => {
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
