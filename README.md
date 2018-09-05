###SUMMARY

This module provides control on site page access

###REQUIREMENTS 

Nested checkbox
jQuery Update (jQuery v1.6 or later)
Libraries API

###INSTALLATION

To make this module work, you should download jQuery tristate checkbox plugin
(http://jlbruno.github.io/jQuery-Tristate-Checkbox-plugin/) and extract it in
the "libraries" folder of your site (renaming if necessary) so that the path
is libraries/tristate/jquery.tristate.min.js
In jQuery Update settings, select jQuery v1.7 or 1.8
Then install module as usual.

###CONFIGURATION

Set permissions to allow some roles to configure access to some menus' items

###CUSTOMIZATION

Policy of accessibility to blocked pages (administrator is allways availible):
hook_site_pages_access_deny_validate_alter(&$bypass)

Actions to do on attempt to access to not allowed pages:
hook_site_pages_access_deny_callback_alter(
  &$router_item, $path, $original_map, $original_router_item_access_callback
)
