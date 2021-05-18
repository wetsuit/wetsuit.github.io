# wetsuit.github.io

## Initial set up

1. Terminal: `git clone https://github.com/wetsuit/wetsuit.github.io.git`
2. Terminal: `cd wetsuit.github.io`
3. Terminal: `npm i`
4. Terminal: `npm run develop`
5. Go to `localhost:3000` in your browser. If the page loads, you're golden!

## Update inventory

1. Terminal: `cd wetsut.github.io` to go to the code folder and `git pull` to check for code updates
2. Update inventory spreadsheet, download as .xlsx file, and replace the existing file in the `src/data/` folder.
3. Add or delete images from the respective `src/images/{identifier}/` folder. If the item has been sold, delete the folder. If a folder for the identifier doesn't exist, create one!
4. Terminal: `npm run deploy`

## Update code

1. Terminal: `git pull` to check for code updates
2. Make code change and test it using steps 4 & 5 under "Initial set up"
3. Terminal: `git add . && git commit -m "<update description>" && git push`
4. Terminal: `npm run deploy`
