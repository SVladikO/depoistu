### Git flow
###### For developers only

1. We create our branches from develop with the same Jira issue number and title
###### Example 1: 
* when jira issue title `PMA-1 Create header`
* we create git branch name feature/PMA-1-create-header

###### Example 2:
* when jira issue title `PMA-2 Fix header logo`
* we create git branch name bugfix/PMA-2-fix-header-logo

2. Create PR to the parent branch.
3. Squash your commits before merge.

#### Conclusion
One jira ticket = one branch = one commit with the same number and title




