import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SecondaryMenubarComponent } from './components/secondary-menubar/secondary-menubar.component';
import { SectionLinkComponent } from './components/section-link/section-link.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		CardComponent,
		MenuBarComponent,
		SecondaryMenubarComponent,
		SectionLinkComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
