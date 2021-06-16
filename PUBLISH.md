# HowTo Publish

Make sure to increase version number on develop. Then merge into master. CI will automatically publish to npm.

## FAQ

- What if publish fails?

Make sure NPM_TOKEN environment variable (in CircleCI) is correctly set. Otherwise create a new token on npmjs.org.
