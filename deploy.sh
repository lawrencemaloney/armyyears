echo "Switching  to branch main"
git checkout main

echo "Building app..."
npm run build 

echo "Deploying files to server..."
scp -r build/* larrymm@173.230.133.229:/var/www/html/
# scp -r build/* larrymm@173.230.133.229:/var/www/maloney-family-server/

echo "Done! Hopefully"
