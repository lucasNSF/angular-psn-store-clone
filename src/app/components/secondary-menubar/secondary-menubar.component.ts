import { Component } from '@angular/core';

@Component({
	selector: 'app-secondary-menubar',
	templateUrl: './secondary-menubar.component.html',
	styleUrls: ['./secondary-menubar.component.css'],
})
export class SecondaryMenubarComponent {
	sectionLinkClicked: Record<string, boolean> = {};

	emitClickEvent(componentId: string) {
		Reflect.ownKeys(this.sectionLinkClicked)
			.filter((key) => key !== componentId)
			.forEach((key) => {
				Reflect.set(this.sectionLinkClicked, key, false);
			});

		if (!Reflect.has(this.sectionLinkClicked, componentId)) {
			Reflect.set(this.sectionLinkClicked, componentId, true);
		} else {
			const value = Reflect.get(this.sectionLinkClicked, componentId);
			Reflect.set(this.sectionLinkClicked, componentId, value ? false : true);
		}
	}
}
