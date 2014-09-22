PageRenameOptions
================

Processwire module determining how pages are renamed when the title is changed

##WARNING

Enabling this module has the potential to break internal and external links to your site because changes to the page's name also change its URL!

In most cases it should only be enabled during the development phase of your site. Even so, you should consider installing Page Path History (core module) and potentially PageLinkAbstractor to reduce the potential for broken links.

To use this module, the user's role must have the 'page-auto-rename' permission checked.


###Access permission

This module requires a new permission: "page-rename-options". This permission is created automatically on install and is added to the superuser role, but it is up to the developer to add the permission to other roles as required.


###Config Settings

* Checkbox to enable/disable the module
* Checkbox for Force Match setting which prevents any manual changes to the page name
* Selection of roles that are exempt from the Force Match option
* Checkbox to protect existing changes to the page name
* Checkbox to protect manual live changes to the page name


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