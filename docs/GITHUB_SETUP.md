# GitHub Setup

The local repo is connected to GitHub, but the first push is pending because this terminal does not have GitHub credentials configured. GitHub CLI is not installed on this machine.

## Current Local Repo

Path:

```bash
/Users/leo/Hard Projects/Paperclip Academy
```

Branch:

```bash
main
```

## Recommended GitHub Repo

Create an empty private GitHub repo first. A safe placeholder name is:

```text
summer-learning-agent-program
```

The product name can still change later.

## Current Remote

```bash
origin https://github.com/droteng/summer-learning-agent-program.git
```

## Push Main

Run this after GitHub authentication is configured:

```bash
git push -u origin main
```

## If Remote Needs To Be Reattached

If the remote is removed or changed later, run:

```bash
git remote add origin <GITHUB_REPO_URL>
git push -u origin main
```

If the remote already exists:

```bash
git remote set-url origin <GITHUB_REPO_URL>
git push -u origin main
```

## Notes

- Do not initialize the GitHub repo with a README, license, or `.gitignore`; this local repo already has those project files.
- Keep the repo private while the product direction, child-safety policy, and monetization plan are still changing.
- Once connected, other computers with Codex can use `git clone <GITHUB_REPO_URL>`.
