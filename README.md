```bash

# Clone old repo
git clone /path/to/python /tmp/python-temp
cd /tmp/python-temp

# Move all files to python/ folder in history
git filter-repo --to-subdirectory-filter python

# Go to new repo
cd /path/to/learnhub

# Add filtered old repo as remote and fetch
git remote add oldpython /tmp/python-temp
git fetch oldpython

# Merge histories
git merge oldpython/main --allow-unrelated-histories

```
