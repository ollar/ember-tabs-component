import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TabContentComponent extends Component {
    @tracked $el = null;

    get isVisible() {
        return this.$el === this.args.activeContentElement;
    }

    @action
    registerContent(el) {
        this.$el = el;
        return this.args.registerContent(el);
    }
}
