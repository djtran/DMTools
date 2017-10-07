# Dungeon Master Tools!

## Base Criteria:

1. Adventure planning using a graph view (Undirected Graphs or DAGs)
	- Nodes are key instances that can have many objects (characters, loot, important details, etc) attached to them. 
2. Adventure timeline
	- As we go through an adventure, the DM can attach a completed instance to an ongoing timeline. Points on the timeline can be edited (because we all know nothing ever goes to plan).
3. Creation & Instance mapping
	- Ex: I create and flesh out a character (a type of object) and I'll attach that character to three instances (they come, participate, and leave for whatever reason).
	- Ex: I'll create loot and drag it to the instances where the characters are most likely to get it.

## Development setup (Ruby + Rails + this package)

### Requirements:

Rails Server:
1. Ruby 
2. Rails
3. other libraries zzzz.

#### Windows:

1. Install Ruby (at the time of this writing 2.4.2-2) at rubyinstaller.org
	- To check if you have a 32-bit or 64-bit installation of Windows 10 you can:
		- Hit the Windows Key
		- Type "System Information" and select it from search
		- Under "System Type" in the summary it will tell you what type of installation you have.
	- Use all defaults.
	- **At the last screen make sure you fill the checkbox to install MSYS2 and the development toolchain before you click Finish**
		- If you didn't just rerun the installer and do it again.
2. Hit the Windows key and open up the command prompt (cmd)
3. `ruby -v` should print version information for 2.4.2
4. `gem install rails` will install all the gems needed to run ruby
5. Run the following to create a test Rails application and run it:
	1. `rails new test-app-name-here` (this one may take some time)
	2. `cd test-app-name-here`
	3. `rails server`
6. In a browser like Google Chrome, go to `localhost:3000` and you'll see "Yay! You're on Rails!"

##### All of the below might actually just be optional, install if you want MSYS2 (it's like Cygwin)
2. In the command prompt (cmd.exe) window that appears, just keep hitting ENTER whenver prompted to install defaults.
	- Should say "MSYS2 seems to be unavailable" and then proceed to download MSYS2
	- Then the MSYS2 installer will open up, click through to install that.
3. (I derped and closed all my windows) Rerunning the ruby installer should bring you back to the command prompt for MSYS2. 
	- Pressing Enter to install defaults will then update your MSYS2 installation and libraries through the `pacman` package manager and also install build tools like `automake`.
4. You should be able to open **MSYS2** and run the following:
	- `pacman -S ruby`
		- This installs the ruby package and its dependencies so that you can run ruby code.
	- `gem install rails`
		- This is the framework we'll use in ruby. Ruby libraries are organized as packages called "gems". If you want to leverage someone else's tools, you can install the corresponding gem if they chose to distribute it.


#### Starting up the server to access the webpage