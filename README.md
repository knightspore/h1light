# h1light SEO Spot-Check Assitant

h1light (pronounced: highlight) is a simple Firefox extension created for assisting SEO spot checks. 

In short, it's meant to be used to check the heading structure of a page at a glance. 

## Installation

The add-on is currently in development mode (not yet submitted to the addon store). This means you need to add the plugin in debug mode, and simply enable / disable as you require. 

Visit the Debugging Page in your URL bar

```
about:debugging
```

Click 'This Firefox' on the left.

Select 'Load Temporary Add-on...'

Select any of the included files in ```/h1light-src.```

You should now be running the plugin in debug mode. Reload to view new changes you've made to the plugin, and click 'Remove' when you're done with the plugin. 

You can also turn the plugin on or off on the add-ons page.
```
about:addons
```

## Packaging

To package the plugin, first navigate to the ```h1light-src``` directory. 

Run the following command:

```bash
zip -r -FS ../dist/h1light.zip * --exclude '*.git*'
```

You will now have a new packaged version of the plugin in the ```/dist``` folder. 

## To-Do

☐ Add Toggle Button
☐ Only Activate plugin when prompted
☐ Only Activate plugin in the current tab