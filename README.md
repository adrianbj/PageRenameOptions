PageRenameOptions
================

Processwire module determining how pages are renamed when the title is changed

##WARNING

This module may break links to your site because changes to the page's name also change its URL!
You REALLY should install Page Path History (core module) and potentially Page Link Abstractor to prevent possible broken links.

##Introduction

With none of the settings below checked, the default behavior is to have the page name always match changes to the page title, but allow the user to manually edit if they want. The options allow you to protect initial differences (changes you may have made as a user with an exempt role), completely disable manual changes, or protect manual name changes from subsequent changes to the title while editing.

My preferred settings are to set the exempt role as superuser, and check "Initial Differences Protected" and "Prevent Manual Changes".

Please test the behavior of each setting thoroughly so you understand what each one does!

Please let me know if you have any further requirements around permissions / role access to the module's functionality.


##CONFIG SETTINGS

###Exempt Roles

* The selected roles will not be subject to any of the rules below.
* The name will change automatically with the title, but they will be able to manually edit the page name as desired.

###Initial Differences Protected

* If checked, further changes to the name (to match a changing title) will not happen if the name is already different from the title (evaluated on page edit initial load).

###Prevent Manual Changes

* If checked, it won't be possible to manually edit the name.
* If checked, this will disable the "Live Changes Protected" setting since it won't be possible to make any manual changes.

###Live Changes Protected

* If checked, further changes to the name (to match a changing title) will not happen if the name field was manually changed at any time during the current page edit.


## License

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

(See included LICENSE file for full license text.)