# Agent Workflow

1. Pick the specified Linear issue.
2. Do not get hit endpoint to find out the ids of Different
3. Move it to `In Progress` with `id=3d49fe16-21e1-4e4b-87b1-de92213a9a31`.
4. Inspect the `src follder` such that `Todo.tsx` is the file where changes to any actions related to TODO will be made and `tests` will be added in `Todo.test.tsx`. You do not need to explore any other file.
5. Create `feature/<issue-key>-<description>` or `improvement/<issue-key>-<description>` from the latest main.
6. Implement the issue.
7. Run tests and build.
8. If tests/build fail, fix them before continuing.
9. Commit changes with the Linear issue key.
10. Push the branch to the GitHub repository.
11. Create a PR targeting `main`.
12. Move the Linear issue to `In Review` with `id=bde0e49b-9c50-4bbe-bd78-c687b7e65c29`.
13. Wait for CI.
14. If CI fails:
15. Fix the failure on the same branch.
16. Run tests/build.
17. Commit and push.
18. Wait for CI again.
19. If CI passes, get the PR diff and review only the changes introduced by the PR.
20. If review finds issues:
21. Fix them on the same branch.
22. Run tests/build.
23. Commit and push.
24. Wait for CI.
25. Review the updated diff again.
26. When CI passes + review is clean, merge the PR into main.
27. Checkout main and pull the merged changes.
28. Move the Linear issue to `Done` with `id=5811ee0a-98f1-40fb-99fd-8e83756f9cec`.

Use local Git commands for repository operations.
Use Linear tools for Linear operations.
Use GitHub tools for GitHub operations.
Do not create tools for operations that can be performed directly through the shell.
