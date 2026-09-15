# Agent Workflow

1. Pick the specified Linear issue.
2. Move it to `In Progress`.
3. Inspect the React codebase and understand the relevant files.
4. Create `feature/<issue-key>-<description>` or `improvement/<issue-key>-<description>` from the latest main.
5. Implement the issue.
6. Run tests and build.
7. If tests/build fail, fix them before continuing.
8. Commit changes with the Linear issue key.
9. Push the branch to the GitHub repository.
10. Create a PR targeting `main`.
11. Move the Linear issue to `In Review`.
12. Wait for CI.
13. If CI fails:
14. Fix the failure on the same branch.
15. Run tests/build.
16. Commit and push.
17. Wait for CI again.
18. If CI passes, get the PR diff and review only the changes introduced by the PR.
19. If review finds issues:
20. Fix them on the same branch.
21. Run tests/build.
22. Commit and push.
23. Wait for CI.
24. Review the updated diff again.
25. When CI passes + review is clean, merge the PR into main.
26. Checkout main and pull the merged changes.
27. Move the Linear issue to Done.

Use local Git commands for repository operations.
Use Linear tools for Linear operations.
Use GitHub tools for GitHub operations.
Do not create tools for operations that can be performed directly through the shell.
