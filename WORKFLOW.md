# Agent Workflow

1. Pick the specified Linear issue.
2. Move it to `In Progress`.
3. Inspect the React codebase and understand the relevant files.
4. Create `feature/<issue-key>-<description>` or `improvement/<issue-key>-<description>`.
5. Implement the issue.
6. Run tests, and build.
7. Commit changes with the Linear issue key.
8. Push the branch to the GitHub `https://github.com/muhammad-hammad-sarwar/agent-driven-todo` repository.
9. Create a PR targeting the `main` branch.
10. Move the Linear issue to `In Review`.
11. If CI fails, fix the issue and push again.
12. If review requests changes, implement them on the same branch and update the PR.
