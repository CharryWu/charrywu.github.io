yarn docs:build # navigate into the build output directory
Set-Location .\docs\.vitepress\dist # if you are deploying to a custom domain

# echo 'www.example.com' > CNAME git init
git add -A
git commit -m 'deploy' # if you are deploying to https://<USERNAME>.github.io

git push
Set-Location -Path $PSScriptRoot
