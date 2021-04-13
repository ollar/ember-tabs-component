import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TabsComponent extends Component {
    @tracked activeTab = 0;
    @tracked titles = [];
    @tracked contents = [];

    tabTitle = 'tabs/title';
    tabContent = 'tabs/content';

    @action
    registerTitle(el) {
        this.titles = [...this.titles, el];
    }

    @action
    registerContent(el) {
        this.contents = [...this.contents, el];
    }

    @action
    activateTab(e) {
        this.activeTab = this.titles.indexOf(e.target);
    }

    get activeTabElement() {
        return this.titles[this.activeTab];
    }

    get activeContentElement() {
        return this.contents[this.activeTab];
    }
}
