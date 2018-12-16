import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AuthGuard } from './auth.guard';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signUp', component: SignUpComponent },
    // { path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard] },
    { path: 'gallery', component: GalleryComponent},
    { path: 'product', component: ProductComponent},
    { path: 'contactUs', component: ContactUsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
