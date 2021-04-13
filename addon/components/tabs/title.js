import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TabTitleComponent extends Component {
    @tracked $el = null;

    get isActive() {
        return this.$el === this.args.activeTabElement;
    }

    @action
    registerTitle(el) {
        this.$el = el;
        return this.args.registerTitle(el);
    }

    @action
    activateTab(e) {
        return this.args.activateTab(e);
    }
}
