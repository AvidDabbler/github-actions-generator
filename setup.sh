npx create-react-app --template typescript

# install libraries
npm install react-redux @redux/toolkit

# setup tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# setup prestage prettier
npx husky-init
npm install --save-dev pretty-quick
npx husky set .husky/pre-commit "npx pretty-quick --staged"


echo "update tailwind.config.js with"
echo "\"./src/**/*.{js,jsx,ts,tsx}\""