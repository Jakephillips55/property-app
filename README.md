In the project directory, you can run:

api server setup with json-server
to run
npm install -g node -server

json-server --port 7000 --routes routes.json --watch data.json

test requirements:
Create the front-end of a web application using react. This web applications will be used by users
to view properties. To accomplish this, the web app should consist of two pages with the
requirements listed below.

Listings Page
The goal of this page is to display a list of properties that will provide some essential details about
the properties. The styling and exact functionality is up to you as long as it meets the following
requirements.
• Properties need to show
• display address
• price
• available date
• One image (it is ok to use the same stock image for all properties)
• You should be able to “like” a property and this should be visible on the property tiles.
• Clicking on properties should take you to the property page (requirements for this page
below).
Property Page
The goal of this page it to display and allow users to edit the data associated with a particular
property.
• If the property was previously saved as a favourite make this clear somewhere.
• Users should be able to unlike or like a the property and this change should be reflected if you
return to the listings page.
• The page should provide fields to edit the following values
• display address
• price
• available date
• the src of the property image
Optional
Create a small api in node that the front-end can make XHR requests against for property
information.
• GET requests to fetch a list of all properties
• GET requests to fetch an individual property
• POST request to update an existing property
It is acceptable to use established npm packages for your project such as createreactapp, nextjs
or any other you feel comfortable with.
