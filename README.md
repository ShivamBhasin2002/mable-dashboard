# Mable Data Dashboard

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/mableai/mable-data-dashboard.git
git branch -M develop
git push -uf origin develop
```

## Integrate with your tools

- [ ] [Set up project integrations](https://gitlab.com/mableai/mable-data-dashboard/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

# Things to keep in mind to keep the code base healthy

- In the pages folder structure the naming should be similar to the route of that page: like if the route is `auth\login` then the location of the file would be `src>pages>auth>login.tsx`l.
- The naming of the files in the other folder structures should be done in `camel case` like `dataQualityLineChart`.
- Every component folder should have its own `index.tsx` file which imports all the components in that folder and exports them to reduce code while importing multiple components from the same folder.
- For `Variable Naming` keep it specific to its purpose and use `camel case`. To signify importance or different type of variable like `STATUS_TYPE` keep it in `snake case` and in `capitals`.
- Wherever u see that u are hardcoding a value keep it in the constants folder as an `enum` or `constant`.
- If u are implementing something generic make a utility function for it and also check if the same thing has been implemented somewhere else in the codebase, if so do change it there to reduce code duplication.
- Try to give types to all the variable where u can, lets try to keep any variable out of our codebase and keep it type specific.
- If u see any problems in the codebase mention it on the slack channel so that we can simultaneously fix it, also give any suggestions u have.
- Also lets have all the branches and commit msgs in proper messaging format. [reference](https://www.conventionalcommits.org/en/v1.0.0/)
  - Naming your branches correctly
  - Correct commit messages
