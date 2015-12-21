# React-Redux Grid

A Grid Component written in [React](https://facebook.github.io/react) using the [Redux](https://github.com/rackt/redux) Pattern.

[Demo](url/to/demo)

##Which Store do I use?

Because Redux imposes a single store pattern, it's very probable that you will need to use this grid with your own store. Well that's ok! The `demo` folder includes:

1. `index.html`
2. `entry.js` The entry point for webpack to build all required assets
3. `provider.jsx` The Redux entry point, where your store will be declared

This component will work out of the box, without installing a custom store. A store has been created within the components source files, but this store will be entirely ignored if a different store is passed to the grid.

In the demo `provider.jsx`, we are simply passing the store at path`'../src/store/store';`. To use your own store, simply provide your own store (recommended) or overwrite the source store.

## Plugins

All Features are implementd as plugins. Plugin defaults are described as below. Their default values can be modified, and new plugins can be introduced with very little modification to core components.

1. Local and/or Remote Data Souce
2. Local and/or Remote Pagination
3. Event Handling for all kinds of DOM Events

## Pagination

	export const plugins = {
	    PAGER: {
	        enabled: true,
	        pagingType: 'remote',
	        pagingSource: 'url/to/grid/data'
	    }
	};

Pagination Defaults:

1. `enabled`: `Boolean`, default value: `true`
2. `pagingType`: `String`, default value; `local`, possible values: `['local', 'remote']`
3. `pagingSource`: `String`, url for remote grid data

## Style

All core components and plugins have corresponding `.styl` files that can be extended or overwritten. Class names have also been modularized and are available to modify or extend withing `src/constants/gridConstants.js`

	export const CSS_PREFIX = 'react-grid';

	export const CLASS_NAMES = {
	    TABLE: 'table',
	    HEADER: 'header',
	    ROW: 'row',
	    CELL: 'cell',
	    PAGERTOOLBAR: 'pager-toolbar',
	    EMPTY_ROW: 'empty-row',
	    BUTTONS: {
	        PAGER: 'page-buttons'
	    }
	};