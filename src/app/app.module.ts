import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { SearchStudentComponent } from './pages/search-student/search-student.component';
//NXG-SPINNER
// import { NgxSpinnerModule } from "ngx-spinner";

import { FormsModule } from '@angular/forms';
//import google map
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
// QRCODE
import { QRCodeModule } from 'angularx-qrcode';
//import images
import { ImageCropperModule } from 'ngx-image-cropper';
import { PendingStatusComponent } from './pages/pending-status/pending-status.component';
import { PagesLoginEmployeeComponent } from './pages/pages-login-employee/pages-login-employee.component';
import { DashboardEmployeeComponent } from './pages/dashboard-employee/dashboard-employee.component';
import { PagesRegisEmployeeComponent } from './pages/pages-regis-employee/pages-regis-employee.component';
import { PendingLanduseStatusComponent } from './pages/pending-landuse-status/pending-landuse-status.component';
import { PagesLanduseDetailComponent } from './pages/pages-landuse-detail/pages-landuse-detail.component';
import { PagesWaitingApproveLanduseComponent } from './pages/pages-waiting-approve-landuse/pages-waiting-approve-landuse.component'
import { PagesLandInformationComponent } from './pages/pages-land-information/pages-land-information.component';
import { PagesUserProfilePeopleComponent } from './pages/pages-user-profile-people/pages-user-profile-people.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AlertsComponent,
    AccordionComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    CardsComponent,
    CarouselComponent,
    ListGroupComponent,
    ModalComponent,
    TabsComponent,
    PaginationComponent,
    ProgressComponent,
    SpinnersComponent,
    TooltipsComponent,
    FormsElementsComponent,
    FormsLayoutsComponent,
    FormsEditorsComponent,
    TablesGeneralComponent,
    TablesDataComponent,
    ChartsChartjsComponent,
    ChartsApexchartsComponent,
    IconsBootstrapComponent,
    IconsRemixComponent,
    IconsBoxiconsComponent,
    UsersProfileComponent,
    SearchStudentComponent,
    PagesLoginEmployeeComponent,
    DashboardEmployeeComponent,
    PagesRegisEmployeeComponent,
    PagesLanduseDetailComponent,
    PagesWaitingApproveLanduseComponent,
    PendingStatusComponent,
    PendingLanduseStatusComponent,
    PagesLandInformationComponent,
    SidebarComponent,
    PagesUserProfilePeopleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    GoogleMapsModule,
    ImageCropperModule,
    QRCodeModule,
    // AgmCoreModule.forRoot({
    //   // please get your own API key here:
    //   // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
    //   apiKey: 'AIzaSyCcsidGB5pgrsS6Xujp0GaFl5k_gAbfYsM'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
