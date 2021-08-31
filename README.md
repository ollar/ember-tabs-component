ember-tabs-component
==============================================================================

Simple Ember.js tabs component (no deps, no styles).


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.20 or above
* Ember CLI v3.20 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-tabs-component
```


Usage
------------------------------------------------------------------------------

```
<Tabs as |tabs|>

    <p>
        Some html markup here
    </p>

    <tabs.Title>
        Tab title 1
    </tabs.Title>
    <tabs.Title>
        Tab title 2
    </tabs.Title>

    <p>
        Some html markup here
    </p>

    <tabs.Content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </tabs.Content>

    <tabs.Content>
        <img src="http://placekitten.com/g/200/300" />
    </tabs.Content>

</Tabs>
```

Tab titles and tab content are matched by the order.


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
