import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { SearchStudentComponent } from './pages/search-student/search-student.component';
import { PendingStatusComponent } from './pages/pending-status/pending-status.component';
import { PagesLoginEmployeeComponent } from './pages/pages-login-employee/pages-login-employee.component';
import { DashboardEmployeeComponent } from './pages/dashboard-employee/dashboard-employee.component';
import { PendingLanduseStatusComponent } from './pages/pending-landuse-status/pending-landuse-status.component';
import { PagesLanduseDetailComponent } from './pages/pages-landuse-detail/pages-landuse-detail.component';
import { PagesWaitingApproveLanduseComponent } from './pages/pages-waiting-approve-landuse/pages-waiting-approve-landuse.component';
import { PagesLandInformationComponent } from './pages/pages-land-information/pages-land-information.component';
import {PagesUserProfilePeopleComponent} from './pages/pages-user-profile-people/pages-user-profile-people.component'
import {ReportGiCoconutComponent} from './pages/report-gi-coconut/report-gi-coconut.component'

import {ReportFruitAppearanceComponent} from './pages/report-fruit-appearance/report-fruit-appearance.component'
import {ReportInflorescenceAndFlowerMorphologyComponent} from './pages/report-inflorescence-and-flower-morphology/report-inflorescence-and-flower-morphology.component'
import {ReportLeafMorphologyComponent} from './pages/report-leaf-morphology/report-leaf-morphology.component'
import {ReportStemMorphologyComponent} from './pages/report-stem-morphology/report-stem-morphology.component'

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'charts-apexcharts', component: ChartsApexchartsComponent },
  { path: 'charts-chartjs', component: ChartsChartjsComponent },
  { path: 'form-editors', component: FormsEditorsComponent },
  { path: 'form-elements', component: FormsElementsComponent },
  { path: 'form-layouts', component: FormsLayoutsComponent },
  { path: 'icons-bootstrap', component: IconsBootstrapComponent },
  { path: 'icons-boxicons', component: IconsBoxiconsComponent },
  { path: 'icons-remix', component: IconsRemixComponent },
  { path: 'list-group', component: ListGroupComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'spinners', component: SpinnersComponent },
  { path: 'tables-data', component: TablesDataComponent },
  { path: 'tables-general', component: TablesGeneralComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'users-profile', component: UsersProfileComponent },
  { path: 'search-student', component: SearchStudentComponent },
  { path: 'pending-status', component: PendingStatusComponent },
  { path: 'pages-login-employee', component: PagesLoginEmployeeComponent },
  { path: 'dashboard-employee', component: DashboardEmployeeComponent },
  { path: 'pending-landuse-status', component: PendingLanduseStatusComponent },
  { path: 'pages-landuse-detail', component: PagesLanduseDetailComponent },
  { path: 'pages-waiting-approve', component: PagesWaitingApproveLanduseComponent },
  { path: 'pages-land-information', component: PagesLandInformationComponent },
  { path: 'pages-user-profile-people',component:PagesUserProfilePeopleComponent},
  { path: 'report-gi-coconut',component:ReportGiCoconutComponent},
  
  { path: 'report-fruit-appearance',component:ReportFruitAppearanceComponent},
  { path: 'report-inflorescence-and-flower-morphology',component:ReportInflorescenceAndFlowerMorphologyComponent},
  { path: 'report-leaf-morphology',component:ReportLeafMorphologyComponent},
  { path: 'report-stem-morphology',component:ReportStemMorphologyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
