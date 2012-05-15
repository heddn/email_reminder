CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Installation


INTRODUCTION
------------

Author:
* Lucas Hedding (heddn)

This module reminds site visitors to subscribe to emails

It allows a site owner to remind visitors to sign-up for email updates and sends the form results to a predefined email address

------------

1. This module requires several other modules, including jquery_update and
   jquery_ui.  Installing these two modules will update jQuery to 1.3 and
   allow you to install jQuery UI 1.7.  Review jquery_ui README for 1.7
   installation instructions.

2. Copy the attention module / directory to your sites/SITENAME/modules 
   directory or sites/all/modules directory.

3. You have to override the css provided with the modalframe module in your theme.  Find the stylesheets section and add these two lines.

  ;stylesheets[all][] = css/your_css_file.css
  stylesheets[all][] = modalframe.parent.css
  stylesheets[all][] = modalframe.child.css

4. Enable the module at Administer >> Site building >> Modules.
