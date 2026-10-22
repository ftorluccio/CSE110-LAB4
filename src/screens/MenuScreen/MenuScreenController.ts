import type { ScreenSwitcher } from "../../types.ts";
import { type Screen, ScreenController } from "../../types.ts";
import { MenuScreenView } from "./MenuScreenView.ts";
/**
 * MenuScreenController - Handles menu interactions
 */
export class MenuScreenController extends ScreenController {
	private view: MenuScreenView;
	private screenSwitcher: ScreenSwitcher;

	constructor(screenSwitcher: ScreenSwitcher) {
		super();
		this.screenSwitcher = screenSwitcher;
		this.view = new MenuScreenView(() => this.handleStartClick());
	}

	/**
	 * Handle start button click
	 */
	private handleStartClick(): void {
		// TODO: Task 1 - Implement screen transition from menu to game
		const gameScreen: Screen = {type: "game"};
		this.screenSwitcher.switchToScreen(gameScreen); 
	}

	/**
	 * Get the view
	 */
	getView(): MenuScreenView {
		return this.view;
	}
}
