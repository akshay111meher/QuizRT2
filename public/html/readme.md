------------------------
Execution Steps
------------------------

1. For windows users using virtual box, install vagrant,  oracle virtualbox, gitbash.
2. Create a new folder named vagrant in your C drive.
3. Clone the repository available in the github or download the zip files.
4. Do the vagrant up for this repository in the gitbash.
5. Now establish a secure connection with the ubuntu machine using vagrant ssh in gitbash.
6. Move to the QuizRT directory inside the ubuntu machine.
7. Run the  following commands to install nodejs,npm,node-static etc.
  1. sudo apt-get install nodejs.
  2. sudo apt-get update
  3. sudo apt-get install npm
  4. sudo npm install node-static -g
  5. sudo npm install express -g
  6. npm install ejs
  7. npm install supervisor
8. Run supervisor app.js to run the app.
9. Now app will start.
10. Execute localhost:<host-port>/userProfile to run the app in your host browser.

------------------
About QuizRT
------------------

It is a Quiz app developed by  a team of six developers i.e. Ayush Jain, Lakshay Bansal, Raghav Goel, Saurabh Gupta, Kshitij Jain and  Akshay Meher during the  full stack developer training at NIIT StackRoute in Bengaluru. It is a multi player quiz app where multiple players can select their favourite topics, can create their profile and contest with different contestants from the world to play the quiz  in real time. The users will be ranked according to their scores calculated from the right answers as well as time taken by them to give the answers. Users will also get different badges according to their skills.


So Have a Go and Enjoy this App.
