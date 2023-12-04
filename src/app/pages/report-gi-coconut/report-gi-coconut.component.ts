import { Component } from '@angular/core';
import { ReportGiCoconutService } from './shared/report-gi-coconut.service';
import Swal from 'sweetalert2'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-report-gi-coconut',
  templateUrl: './report-gi-coconut.component.html',
  styleUrls: ['./report-gi-coconut.component.css']
})
export class ReportGiCoconutComponent {
  constructor(private ReportGiCoconutService: ReportGiCoconutService,private router: Router) { }
  arr: any[] = [];
  ngOnInit(): void {
    this.ReportGiCoconutService.SelectReportGicoconut().subscribe((res: any) => {
      if (res.length > 0) {
        this.arr = res
      }
      else {
        Swal.fire({
          icon: 'warning',
          title: '<h6 style="font-family: Kanit-Regular;">ไม่พบข้อมูล</h6>'
        })
      }
    });
  }
  func_into_report_fruit_appearance(code_tree: any) {
    localStorage.setItem("code_tree", code_tree)
    this.router.navigate(['report-fruit-appearance']);
  }
  func_into_report_inflorescence_and_flower_morphology(code_tree: any) {
    localStorage.setItem("code_tree", code_tree)
    this.router.navigate(['report-inflorescence-and-flower-morphology']);
  }
  func_into_report_leaf_morphology(code_tree: any) {
    localStorage.setItem("code_tree", code_tree)
    this.router.navigate(['report-leaf-morphology']);

  }
  func_into_report_stem_morphology(code_tree: any) {
    localStorage.setItem("code_tree", code_tree)
    this.router.navigate(['report-stem-morphology']);
  }


}
