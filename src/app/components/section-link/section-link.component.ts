import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-section-link',
	templateUrl: './section-link.component.html',
	styleUrls: ['./section-link.component.css'],
})
export class SectionLinkComponent {
	@Input() label: string | undefined;
	@Input() productOptions: { path: string; label: string }[] | undefined;
	@Input() footerTopics: string[] = [];
	@Input() clicked: boolean | undefined;

	getProductImage(productKey: string): string {
		return `assets/images/${productKey}.png`;
	}
}
