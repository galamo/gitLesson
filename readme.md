# git terminology (what we install)
- master: main branch
- commit: submitting files to repository
- init: Creating a managed repository
- clone: cloning an existing repository ( download the existing repo ) 
- pull: get the latest version (code)
- push: push the relevant code to the service (github - upload existing repo ) 
- add: staging the files before commit ( another step committing)
- status: show tracked and untracked files. 
- branch - show the current branch
- checkout - move to the relevant branch
- log: show git repo history 
- remote: URL, the repository url for upload.
- SHA: number of the commit


## authentication
we need to authenticate the service before uploading the repo

## recognize
git should recognize the working user
commands:
git config --global user.email "you@example.com"
git config --global user.name "Your Name"


git commit -m "adding intial files"


## creating new branch
git branch -b BRANCH_NAME
git add 
git commit - m "MESSAGE"
git push origin head

### Go to Github
1. create pull request from the branch
2. send to gal for contribute
3. after my confirmation 
4. merge to master ( from the service)

## last step
1. go to your master branch in the local machine and:
git pull origin master 

check that the changes are made and your project is working

