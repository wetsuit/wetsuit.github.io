# wetsuit.github.io

## Initial set up

1. Terminal: `git clone https://github.com/wetsuit/wetsuit.github.io.git` (only should ever have to run this once)
2. Terminal: `cd wetsuit.github.io`
3. Terminal: `npm i`
4. Terminal: `npm run develop`
5. Go to `localhost:8000` in your browser. If the page loads, you're golden!

## Make updates

1. Terminal: `cd wetsut.github.io` to go to the code folder and `git pull` to check for code updates
2. Update inventory spreadsheet, download as .xlsx file, and replace the existing file in the `src/data/` folder.
3. Add or delete images from the respective `src/images/{identifier}/` folder. If the item has been sold, delete the folder. If a folder for the identifier doesn't exist, create one!
4. Make code changes if that's what you want to do
5. Terminal: `git add . && git commit -m "<update description>" && git push` (update "main" branch)

## Tips

`cd` stands for Change Directory (change the current folder) and will take you to the home directory
`cd <path>` changes you to the directory specified by <path>
`ls` lists all the items in the current directory
`pwd` prints the path of where you are
`git status` tells you what branch you're on (you should always be on "main")
`git log` shows you what commits are on the branch you're on
`git checkout build` changes to the build branch (there are two branches, "main" for source code and "build" for the deployed files)

## Example flow
Goal: I want to update the inventory, add some images, and change the website background color.

The first thing I do is open Terminal. I type `pwd`. It prints `/Users/<myname>`. Cool, that means I'm in my home directory (home folder). I do `ls` next. Alright - I see that my `wetsuit.github.io` directory is still there from last time, so I do `cd wetsuit.github.io` and `git pull` to check for updates.

Then, I open up the folder from Finder. Then, I drag and drop my new images in and update the spreadsheet. After that - I want to check the website, so I go back to Terminal and run `npm run develop` and go to `localhost:8000`. I navigate there in my browser. Awesome, looks good! While I have the website running, I open my code editor and make my code changes to update the background too and test it.

Okay, so at this point, I've made all my changes. Website looks good and there aren't any errors. I want to make the changes go live. In Terminal, I run `git status` to make sure I'm on "main" branch. Then, I run `git add .` to stage my changes and `git commit -m "Update inventory, images, and bg color"` to commit them. Then, I run `git push` to publish my changes. After that, I check from the Github website that CircleCI passes (little green checkmark) and deploys (build branch updates).